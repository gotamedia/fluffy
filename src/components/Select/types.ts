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

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    label: string,
    triggerProps?: ButtonProps,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps,
    onSelect?: ListItemProps['onSelect'],
    closeOnSelect?: boolean,
    isMultiSelect?: boolean,
    width?: number | string,
    minWidth?: number | string,
    selected: any[]
}

export type SelectRef = {
    open: () => void,
    close: () => void
}

export type SelectComponent = ForwardRefExoticComponent<SelectProps & RefAttributes<SelectRef>>