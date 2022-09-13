import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import InputComponent from '@components/Input'
import InputGroupComponent from '@components/InputGroup'
import IconComponent, {
    Icons,
    IconSizes
} from '@components/Icon'

const InputGroup = styled(InputGroupComponent)`
    
`

const Input = styled(InputComponent)`
    ${props => getComponentTheme('TimePicker', 'style.input', props)};
`

const ClearIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Cross,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('TimePicker', 'style.icon', props)};
`

const ClockIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Clock,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('TimePicker', 'style.icon', props)};
`

export {
    InputGroup,
    Input,
    ClearIcon,
    ClockIcon
}