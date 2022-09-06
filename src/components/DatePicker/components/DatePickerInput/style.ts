import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import InputComponent from '@components/Input'
import InputGroupComponent from '@components/InputGroup'
import IconComponent, {
    Icons,
    IconSizes
} from '@components/Icon'

const InputGroup = styled(InputGroupComponent)`
    
`

const Input = styled(InputComponent)`
    ${props => getComponentTheme('DatePicker', 'style', props)?.input};
`

const ClearIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Cross,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('DatePicker', 'style', props)?.icon};
`

const CalendarIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Calendar,
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('DatePicker', 'style', props)?.icon};
`

export {
    InputGroup,
    Input,
    ClearIcon,
    CalendarIcon
}