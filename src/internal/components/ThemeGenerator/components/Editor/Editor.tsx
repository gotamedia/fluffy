//@ts-ignore
import constrainedEditor from 'constrained-editor-plugin'
import { v4 as createId } from 'uuid'

import {
    useRef,
    useState,
    useEffect,
    useCallback
} from 'react'

import * as codeParser from './codeParser'
import * as settings from './settings'

import useLocalStorage from '@root/hooks/useLocalStorage'

import * as Styled from './style'
import type { Monaco } from '@monaco-editor/react'
import type { KeyboardEventHandler } from 'react'

import Header from './components/Header'

const example = `import { createTheme, getTheme } from '@gotamedia/fluffy/theme'
import * as Polished from '@gotamedia/fluffy/packages/polished'
import type { FluffyTheme } from '@gotamedia/fluffy/theme'

const theme = createTheme({
    colors: {
        brand: 'darkcyan'
    },
    components: {
        Button: {
            defaultProps: {
                variant: 'rounded-primary'
            },
            variants: {
                'rounded-primary': (params) => {
                    return {
                        ...getTheme().components.Button.variants.primary(params),
                        borderRadius: '15px'
                    }
                }
            }
        },
        Input: {
            style: {
                root: ({ theme }) => {
                    return {
                        ...getTheme().components.Input.style.root,
                        color: Polished.tint(0.5, theme.colors.brand),
                        borderRadius: '15px',
                        maxWidth: '500px'
                    }
                }
            }
        },
        IconButton: {
            defaultProps: {
                variant: 'rounded-primary'
            },
            variants: {
                'rounded-primary': (params) => {
                    return {
                        ...getTheme().components.Button.variants.primary(params),
                        borderRadius: '15px'
                    }
                }
            }
        }
    }
} as FluffyTheme)

export default theme`

type ThemeMeta = {
    id: string,
    name: string,
    code: string,
    latest?: boolean
}

const initialTheme: ThemeMeta = {
    id: createId(),
    name: 'Untitled',
    code: example,
    latest: true
}

const Editor = (props: any) => {
    const {
        onThemeChange
    } = props

    const constrainedInstance = useRef<any>({})

    const [savedThemes, setSavedThemes] = useLocalStorage<ThemeMeta[]>('fluffy-themes', [ {...initialTheme} ])

    const [hasError, setHasError] = useState(false)
    const [activeTheme, setActiveTheme] = useState<ThemeMeta>({} as ThemeMeta)

    useEffect(() => {
        if (!activeTheme.code) {
            if (savedThemes.length) {
                const latestTheme = savedThemes.find(i => i.latest)

                if (latestTheme) {
                    setActiveTheme(latestTheme)
                } else {
                    setActiveTheme(savedThemes[0])
                }
            } else {
                setSavedThemes([{...initialTheme}])
            }
        }
    }, [activeTheme, savedThemes, setSavedThemes])

    useEffect(() => {
        if (activeTheme.code) {
            const cleanCode = activeTheme.code
                .replace(`import { createTheme, getTheme } from '@gotamedia/fluffy/theme'`, '')
                .replace(`import * as Polished from '@gotamedia/fluffy/packages/polished'`, '')
                .replace(`import type { FluffyTheme } from '@gotamedia/fluffy/theme'`, '')
                .replace(` as FluffyTheme`, '')
    
            const {
                error: parseError,
                code: parsedCode
            } = codeParser.parse(cleanCode)
    
            if (parseError) {
                setHasError(true)
            } else if (parsedCode) {
                setHasError(false)
                
                const {
                    error: instanceError,
                    instance
                } = codeParser.getInstance(parsedCode)
    
                if (instanceError) {
                    setHasError(true)
                } else if (instance) {
                    setHasError(false)
                    onThemeChange(instance)
                }
            }
        }
    }, [activeTheme, onThemeChange])

    const handleEditorDidMount = useCallback((editor: any) => {
        const model = editor.getModel()
        const lineCount = model.getLineCount()
        
        constrainedInstance.current.initializeIn(editor)
        constrainedInstance.current.addRestrictionsTo(model, [
            {
                range: [5, 1, lineCount - 2, 1],
                label: "themeContentRange"
            }
        ])
    }, [])

    const handleEditorWillMount = useCallback(async (monaco: Monaco) => {
        constrainedInstance.current = constrainedEditor(monaco)

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            module: monaco.languages.typescript.ModuleKind.ES2015,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            jsx: monaco.languages.typescript.JsxEmit.React,
            allowNonTsExtensions: true,
            lib: ['es2018']
        })

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        })

        try {
            const fluffyTypes = require('!!raw-loader!./types/fluffy.d.ts.raw').default
    
            const cleanFluffyTypes = fluffyTypes
                .replaceAll('@gotamedia/fluffy/components', '@gotamedia/fluffy')
                .replaceAll('@gotamedia/fluffy/contexts', '@gotamedia/fluffy')
                .replaceAll('@gotamedia/fluffy/hooks', '@gotamedia/fluffy')
                .replaceAll('@gotamedia/fluffy/utils', '@gotamedia/fluffy')
    
            const themeDeclarationsPath = 'file:///node_modules/@gotamedia/fluffy/index.d.ts'
    
            monaco.languages.typescript.typescriptDefaults.addExtraLib(
                cleanFluffyTypes,
                themeDeclarationsPath
            )
        } catch (error) {
            console.error('Editor / Failed to load "@gotamedia/fluffy" types:', error)
        }

        try {
            const styledComponentsTypesResponse = await fetch('https://unpkg.com/@types/styled-components@5.1.25/index.d.ts')
            const styledComponentsTypes = await styledComponentsTypesResponse.text()

            monaco.languages.typescript.typescriptDefaults.addExtraLib(
                styledComponentsTypes,
                `file:///node_modules/@types/styled-components/index.d.ts`
            )
            
            const polishedTypesResponse = await fetch('https://unpkg.com/polished@4.2.2')
            const polishedTypes = await polishedTypesResponse.text()

            monaco.languages.typescript.typescriptDefaults.addExtraLib(
                polishedTypes,
                `file:///node_modules/@gotamedia/fluffy/packages/polished.js`
            )
        } catch (error) {
            console.error('Editor / Failed to load libraries:', error)
        }
    }, [])

    const handleSaveTheme = useCallback(() => {
        let newThemes = savedThemes

        const existingTheme = savedThemes.find(i => i.id === activeTheme.id)

        if (existingTheme) {
            newThemes = newThemes.map(i => {
                if (i.id === activeTheme.id) {
                    return {
                        ...i,
                        name: activeTheme.name,
                        code: activeTheme.code,
                        latest: true
                    }
                } else {
                    return {
                        ...i,
                        latest: false
                    }
                }
            })
        } else {
            newThemes = [
                {
                    ...activeTheme,
                    latest: true
                },
                ...newThemes.map(i => ({
                    ...i,
                    latest: false
                }))
            ]
        }

        setSavedThemes(newThemes)
    }, [activeTheme, savedThemes, setSavedThemes])
    
    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(event => {
        if (event.code === 'KeyS' && (event.metaKey || event.ctrlKey)) {
            event.stopPropagation()
            event.preventDefault()

            handleSaveTheme()
        }
    }, [handleSaveTheme])

    const handleOnCodeChange = useCallback((value: string) => {
        setActiveTheme(current => ({
            ...current,
            code: value
        }))
    }, [])
    
    return (
        <Styled.Wrapper onKeyDown={handleOnKeyDown}>
            <Header
                initialTheme={initialTheme}
                activeTheme={activeTheme}
                savedThemes={savedThemes}
                setActiveTheme={setActiveTheme}
                setSavedThemes={setSavedThemes}
                handleSaveTheme={handleSaveTheme}
                hasError={hasError}
            />
            
            {
                activeTheme.code ? (
                    //@ts-ignore
                    <Styled.MonacoEditor
                        key={activeTheme.id}
                        path={'file:///index.tsx'}
                        height={'unset'}
                        defaultLanguage={'typescript'}
                        defaultValue={activeTheme.code}
                        theme={'vs-dark'}
                        beforeMount={handleEditorWillMount}
                        onMount={handleEditorDidMount}
                        keepCurrentModel={false}
                        onChange={handleOnCodeChange}
                        options={settings.options}
                    />
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
}

export default Editor