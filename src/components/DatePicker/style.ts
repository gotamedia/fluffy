import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import ReactDatePicker from 'react-datepicker'

const Wrapper = styled.div`
    ${props => getComponentTheme('DatePicker', 'style.datepicker', props)};
    ${props => getComponentTheme('DatePicker', 'style.root', props)};

    .fluffy-date-picker-calendar {
        ${props => getComponentTheme('DatePicker', 'style.calendar', props)};
    }
`

const DatePicker = styled(ReactDatePicker)`
    
`

export {
    Wrapper,
    DatePicker
}