import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import DatePickerComponent from '@root/components/DatePicker'

const DatePicker = styled(DatePickerComponent)`
    ${props => getComponentTheme('TimePicker', 'style.root', props)};

    .fluffy-time-picker-calendar {
        ${props => getComponentTheme('TimePicker', 'style.calendar', props)};
    }
`

export {
    DatePicker
}