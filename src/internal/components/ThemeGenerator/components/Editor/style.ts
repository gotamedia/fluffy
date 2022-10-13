import styled from 'styled-components'
import MonacoEditorComponent from '@monaco-editor/react'

import ButtonGroup from '@components/ButtonGroup'

import IconButton, {
    IconButtonShapes,
    IconButtonSizes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

const Wrapper = styled.div`
    width: 30%;
    margin-left: 2px;
    border-left: 2px solid #1e1e1e;
`

const Header = styled.div`
    min-height: 45px;
    position: relative;
    background: #252526;
    padding-left: 30px;
    display: flex;
`

const Input = styled.input`
    background: unset;
    border: none;
    color: white;
    outline: none;
    font-size: 16px;
    margin: 7px auto 7px 0;
    border-right: 1px solid gray;
`

const IconsGroup = styled(ButtonGroup).attrs(() => {
    return {
        size: IconButtonSizes.Small
    }
})`

`

const SettingsIconButton = styled(IconButton).attrs(() => {
    return {
        icon: Icons.Settings,
        shape: IconButtonShapes.Circle
    }
})`
    margin: auto 0;
`

const SaveIconButton = styled(IconButton).attrs(() => {
    return {
        icon: Icons.Bookmarked,
        shape: IconButtonShapes.Circle
    }
})`
    margin: auto 20px auto 0;
`

const ErrorWrapper = styled.div`
    position: absolute;
    inset: 0;
    background: rgb(255, 85, 85);
    padding-left: 30px;
    display: flex;
`

const ErrorMessage = styled.p`
    color: white;
    margin: auto 0;
`

const MonacoEditor = styled(MonacoEditorComponent)`
    padding-top: 10px;
    background: #1e1e1e;
    height: calc(100vh - 50px);
`

export {
    Wrapper,
    Header,
    Input,
    IconsGroup,
    SettingsIconButton,
    SaveIconButton,
    ErrorWrapper,
    ErrorMessage,
    MonacoEditor
}