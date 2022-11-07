import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('Slider', 'style.slidesCount', props)};
`

export {
    Wrapper
}