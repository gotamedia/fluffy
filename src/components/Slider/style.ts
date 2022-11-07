import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('Slider', 'style.root', props)};
`

const FullscreenWrapper = styled.div`
    ${props => getComponentTheme('Slider', 'style.fullscreenWrapper', props)};
`

export {
    Wrapper,
    FullscreenWrapper
}