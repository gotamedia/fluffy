import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    RefAttributes
} from 'react'

import type { OverlayProps } from '../Overlay/types'
import type { ListProps, ListRef } from '../List/types'

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    show: boolean,
    anchor?: HTMLElement | null,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps & RefAttributes<ListRef>
}

export type MenuRef = HTMLDivElement

export type MenuComponent = ForwardRefExoticComponent<MenuProps & RefAttributes<MenuRef>>