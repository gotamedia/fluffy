import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div<{ $componentState: any }>`
    ${props => getComponentTheme('ImageGallery', 'style.previewItem', props)};
`

export {
    Wrapper
}