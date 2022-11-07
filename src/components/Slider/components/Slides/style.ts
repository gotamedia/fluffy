import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const SlideWrapper = styled.div`
    ${props => getComponentTheme('Slider', 'style.slides', props)};
`

export {
    SlideWrapper
}