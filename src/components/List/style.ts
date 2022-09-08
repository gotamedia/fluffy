import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import InputGroupComponent from '../InputGroup'
import InputComponent from '../Input'
import Icon, { Icons, IconSizes } from '../Icon'

const Wrapper = styled.div`
    ${props => getComponentTheme('List', 'style.root', props)};
`

const InputGroup = styled(InputGroupComponent)`
    ${props => getComponentTheme('List', 'style.inputGroup', props)};
`

const Input = styled(InputComponent)`
    ${props => getComponentTheme('List', 'style.input', props)};
`

const ClearIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.Cross,
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