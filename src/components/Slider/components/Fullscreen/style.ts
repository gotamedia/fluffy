import styled from 'styled-components'

import IconButton, {
    IconButtonShapes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

const FullscreenIcon = styled(IconButton).attrs(({ $isFullscreen }: any) => {
    return {
        icon: $isFullscreen ? Icons.ArrowsPointingIn : Icons.ArrowsPointingOut,
        shape: IconButtonShapes.Circle
    }
})<{ $isFullscreen: boolean }>`
    position: absolute;
    right: 10px;
    top: 10px;
`

export {
    FullscreenIcon
}