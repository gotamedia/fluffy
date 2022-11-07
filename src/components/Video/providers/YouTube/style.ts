import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Iframe = styled.iframe`
    ${props => getComponentTheme('Video', 'style.youtube', props)};
`

export {
    Iframe
}