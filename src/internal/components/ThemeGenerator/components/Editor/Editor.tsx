//@ts-ignore
import constrainedEditor from 'constrained-editor-plugin'

import {
    useRef,
    useState,
    useEffect,
    KeyboardEventHandler
} from 'react'

import * as codeParser from './codeParser'
import * as settings from './settings'

import * as Styled from './style'
import type { Monaco } from '@monaco-editor/react'

const Editor = (props: any) => {
    const {
        code,
        onCodeChange,
        onThemeChange
    } = props

    const constrainedInstance = useRef<any>({})

    const [hasError, setHasError] = useState(false)
    const [themeMeta, setThemeMeta] = useState({
        name: 'Untitled'
    })

    useEffect(() => {
        const cleanCode = code
            .replace(`import { createTheme, getTheme } from '@gotamedia/fluffy/theme'`, '')
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
    }, [code, onThemeChange])

    const handleEditorDidMount = (editor: any) => {
        const model = editor.getModel()
        const lineCount = model.getLineCount()
        
        constrainedInstance.current.initializeIn(editor)
        constrainedInstance.current.addRestrictionsTo(model, [
            {
                range: [4, 1, lineCount - 2, 1],
                label: "themeContentRange"
            }
        ])
    }

    const handleEditorWillMount = async (monaco: Monaco) => {
        constrainedInstance.current = constrainedEditor(monaco)

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            module: monaco.languages.typescript.ModuleKind.ES2015,
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
        } catch (error) {
            console.error('Editor / Failed to load "styled-components" types:', error)
        }
    }
    
    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
        if (event.code === 'KeyS' && (event.metaKey || event.ctrlKey)) {
            event.stopPropagation()
            event.preventDefault()
        }
    }

    const handleOnThemeNameChange: KeyboardEventHandler<HTMLInputElement> = event => {
        const value = event.target.value

        setThemeMeta(current => {
            return {
                ...current,
                name: value
            }
        })
    }
    
    return (
        <Styled.Wrapper onKeyDown={handleOnKeyDown}>
            <Styled.Header>
                <Styled.Input
                    value={themeMeta.name}
                    onChange={handleOnThemeNameChange}
                />

                <Styled.IconsGroup>
                    <Styled.SettingsIconButton />

                    <Styled.SaveIconButton />
                </Styled.IconsGroup>

                {
                    hasError ? (
                        <Styled.ErrorWrapper>
                            <Styled.ErrorMessage>
                                {'Invalid code!'}
                            </Styled.ErrorMessage>
                        </Styled.ErrorWrapper>
                    ) : (
                        null
                    )
                }
            </Styled.Header>

            {/*@ts-ignore*/}
            <Styled.MonacoEditor
                path={'file:///index.tsx'}
                height={'unset'}
                defaultLanguage={'typescript'}
                defaultValue={code}
                theme={'vs-dark'}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                keepCurrentModel={false}
                onChange={onCodeChange}
                options={settings.options}
            />
        </Styled.Wrapper>
    )
}

export default Editor