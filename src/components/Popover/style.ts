import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import AnchorComponent from '@components/Anchor'
import OverlayComponent from '@components/Overlay'

const Overlay = styled(OverlayComponent)`
    ${props => getComponentTheme('Popover', 'style.overlay', props)};
`

const Anchor = styled(AnchorComponent)`
    ${props => getComponentTheme('Popover', 'style.root', props)};
`

export {
    Overlay,
    Anchor
}