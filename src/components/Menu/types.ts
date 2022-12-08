import {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListProps, ListRef } from '../List/types'
import type { AnchorProps } from '../Anchor/types'

export interface MenuProps extends AnchorProps {
    show: boolean,
    anchor?: HTMLElement | null,
    onClickOutside?: (event: MouseEvent | TouchEvent) => void,
    listProps?: ListProps & RefAttributes<ListRef>,
    shouldFocusOnClose?: boolean
}

export type MenuRef = HTMLDivElement

export type MenuComponent = ForwardRefExoticComponent<MenuProps & RefAttributes<MenuRef>>