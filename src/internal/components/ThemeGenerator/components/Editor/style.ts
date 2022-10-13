import styled from 'styled-components'
import MonacoEditorComponent from '@monaco-editor/react'

const Wrapper = styled.div`
    width: 30%;
    margin-left: 2px;
    border-left: 2px solid #1e1e1e;
`

const MonacoEditor = styled(MonacoEditorComponent)`
    padding-top: 10px;
    background: #1e1e1e;
    height: calc(100vh - 50px);
`

export {
    Wrapper,
    MonacoEditor
}