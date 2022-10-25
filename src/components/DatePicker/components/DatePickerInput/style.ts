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
    ${props => getComponentTheme('DatePicker', 'style.input', props)};
`

const ClearIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.XMark,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('DatePicker', 'style.icon', props)};
`

const CalendarIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Calendar,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('DatePicker', 'style.icon', props)};
`

export {
    InputGroup,
    Input,
    ClearIcon,
    CalendarIcon
}