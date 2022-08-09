import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    RefAttributes
} from 'react'

import type { ButtonProps } from '../Button'
import type { OverlayProps } from '../Overlay/types'
import type { ListProps } from '../List/types'
import type { ListItemProps } from '../ListItem/types'

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    label: string,
    triggerProps?: ButtonProps,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps,
    onSelect?: ListItemProps['onSelect']
}

export type DropdownRef = {
    open: () => void,
    close: () => void
}

export type DropdownComponent = ForwardRefExoticComponent<DropdownProps & RefAttributes<DropdownRef>>