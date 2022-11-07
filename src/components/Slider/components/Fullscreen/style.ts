import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import IconButton, {
    IconButtonShapes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

const FullscreenIcon = styled(IconButton).attrs(({ $componentState }: any) => {
    return {
        icon: $componentState.isFullscreen ? Icons.ArrowsPointingIn : Icons.ArrowsPointingOut,
        shape: IconButtonShapes.Circle
    }
})<{ $componentState: any }>`
    ${props => getComponentTheme('Slider', 'style.fullscreen', props)};
`

export {
    FullscreenIcon
}