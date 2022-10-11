//@ts-ignore
import constrainedEditor from 'constrained-editor-plugin'

import { useRef, useEffect } from 'react'
import MonacoEditor, { Monaco } from '@monaco-editor/react'

import * as codeParser from './codeParser'

import * as settings from './settings'

import * as Styled from './style'

const Editor = (props: any) => {
    const {
        code,
        onCodeChange,
        onThemeChange
    } = props

    const constrainedInstance = useRef<any>({})

    useEffect(() => {
        const cleanCode = code.replace(`import { createTheme } from '@gotamedia/fluffy/theme'`, '')

        const parsedCode = codeParser.parse(cleanCode)
        const theme = codeParser.getInstance(parsedCode)

        if (theme) {
            onThemeChange(theme)
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

    const handleEditorWillMount = (monaco: Monaco) => {
        constrainedInstance.current = constrainedEditor(monaco)

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            module: monaco.languages.typescript.ModuleKind.ES2015,
            jsx: monaco.languages.typescript.JsxEmit.React,
            allowNonTsExtensions: true,
            lib: ['es2018']
        })

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        })

        const themeDeclarations = `
            declare module '@gotamedia/fluffy/theme' {
                export function createTheme(theme: any): any
            }
        `

        const themeDeclarationsPath = 'file:///node_modules/@gotamedia/fluffy/theme/index.d.ts'

        monaco.languages.typescript.typescriptDefaults.addExtraLib(themeDeclarations, themeDeclarationsPath)
    }

    return (
        <Styled.Wrapper>
            <MonacoEditor
                path={'file:///index.tsx'}
                height={'100vh'}
                defaultLanguage={'typescript'}
                defaultValue={code}
                theme={'vs-dark'}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                keepCurrentModel={false}
                onChange={onCodeChange}
                //@ts-ignore
                options={settings.options}
            />
        </Styled.Wrapper>
    )
}

export default Editor