import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Video = styled.video`
    ${props => getComponentTheme('Video', 'style.native', props)};
`

export {
    Video
}