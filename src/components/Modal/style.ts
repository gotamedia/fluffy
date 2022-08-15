import styled, { css } from 'styled-components'

import { themeHelpers } from '@utils/theme'

import FocusTrap from '../FocusTrap'
import OverlayComponent from '../Overlay'
import Icon, { Icons } from '../Icon'

const Overlay = styled(OverlayComponent)`
    display: flex;
`

const FocusTrapWrapper = styled(FocusTrap)`
    z-index: 900;
    height: auto;
    width: 890px;
    height: auto;
    border-radius: 2px;
    background-color: white;
    margin: auto;
    position: relative;
    overflow: hidden;
    padding: 16px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

    ${themeHelpers.isSmallDevice(css`
        width: 335px;
    `)};
`

const CloseIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.Cross,
        tabIndex: 0
    }
})`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

export {
    Overlay,
    FocusTrapWrapper,
    CloseIcon
}