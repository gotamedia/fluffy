import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import FocusTrap from '../FocusTrap'
import OverlayComponent from '../Overlay'
import Icon, { Icons } from '../Icon'

const Overlay = styled(OverlayComponent)`
    ${props => getComponentTheme('Modal', 'style.overlay', props)};
`

const FocusTrapWrapper = styled(FocusTrap)`
    ${props => getComponentTheme('Modal', 'style.root', props)};
`

const CloseIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.XMark,
        tabIndex: 0
    }
})`
    ${props => getComponentTheme('Modal', 'style.icon', props)};
`

export {
    Overlay,
    FocusTrapWrapper,
    CloseIcon
}