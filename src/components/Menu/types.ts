import {
    ForwardRefExoticComponent,
    MouseEventHandler,
    RefAttributes
} from 'react'

import type { OverlayProps } from '../Overlay/types'
import type { ListProps, ListRef } from '../List/types'
import type { AnchorProps } from '../Anchor/types'

export interface MenuProps extends AnchorProps {
    show: boolean,
    anchor?: HTMLElement | null,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps & RefAttributes<ListRef>
}

export type MenuRef = HTMLDivElement

export type MenuComponent = ForwardRefExoticComponent<MenuProps & RefAttributes<MenuRef>>