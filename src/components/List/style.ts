import styled from 'styled-components'

import InputGroupComponent from '../InputGroup'
import InputComponent from '../Input'
import Icon, { Icons, IconSizes } from '../Icon'

const Wrapper = styled.div`
    outline: none;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`

const InputGroup = styled(InputGroupComponent)`
    margin-bottom: 5px;
`

const Input = styled(InputComponent)`
    min-width: unset;

    &:focus {
        box-shadow: unset;
    }
`

const ClearIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.XMark,
        size: IconSizes.Tiny
    }
})`
    
`

export {
    Wrapper,
    InputGroup,
    Input,
    ClearIcon
}