import styled from 'styled-components'

import ButtonGroup from '@components/ButtonGroup'

import IconButton, {
    IconButtonShapes,
    IconButtonSizes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

const Wrapper = styled.div`
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
        icon: Icons.Cog,
        shape: IconButtonShapes.Circle
    }
})`
    margin: auto 0;
`

const SaveIconButton = styled(IconButton).attrs(() => {
    return {
        icon: Icons.ArrowDownTray,
        shape: IconButtonShapes.Circle
    }
})`
    margin: auto 0;
`

const CreateIconButton = styled(IconButton).attrs(() => {
    return {
        icon: Icons.DocumentPlus,
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

export {
    Wrapper,
    Input,
    IconsGroup,
    SettingsIconButton,
    SaveIconButton,
    CreateIconButton,
    ErrorWrapper,
    ErrorMessage
}