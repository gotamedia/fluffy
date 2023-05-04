import styled from 'styled-components'

import InputGroupComponent from '@components/InputGroup'
import InputComponent from '@components/Input'
import Icon, { Icons, IconSizes } from '@components/Icon'

const InputGroup = styled(InputGroupComponent)`
    width: 100%;
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
    InputGroup,
    Input,
    ClearIcon
}