import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import SliderComponent from '@components/Slider'

const Slider = styled(SliderComponent)`
    ${props => getComponentTheme('ImageGallery', 'style.root', props)};
`

export {
    Slider
}