import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import ReactDatePicker from 'react-datepicker'

const Wrapper = styled.div`
    ${props => getComponentTheme('DatePicker', 'style.datepicker', props)};
    ${props => getComponentTheme('DatePicker', 'style.root', props)};

    .fluffy-date-picker {
        ${props => getComponentTheme('DatePicker', 'style.calendar', props)};
    }
`

const DatePicker = styled(ReactDatePicker)`
    
`

export {
    Wrapper,
    DatePicker
}