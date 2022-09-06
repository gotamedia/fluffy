import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import ReactDatePicker from 'react-datepicker'

const Wrapper = styled.div`
    ${props => getComponentTheme('DatePicker', 'style', props)?.datepicker};
    ${props => getComponentTheme('DatePicker', 'style', props)?.root};

    .fluffy-date-picker {
        ${props => getComponentTheme('DatePicker', 'style', props)?.calendar};
    }
`

const DatePicker = styled(ReactDatePicker)`
    
`

export {
    Wrapper,
    DatePicker
}