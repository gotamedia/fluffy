import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    RefAttributes
} from 'react'

import {
    ButtonVariants,
    ButtonSizes
} from '../Button'

import type { ButtonProps } from '../Button'
import type { OverlayProps } from '../Overlay/types'
import type { ListProps } from '../List/types'
import type { ListItemProps } from '../ListItem/types'

export const DropdownVariants = {
    Primary: ButtonVariants.Primary,
    Secondary: ButtonVariants.Secondary,
    Outline: ButtonVariants.Outline
}

export type DropdownVariantsType = typeof DropdownVariants
export type DropdownVariantType = DropdownVariantsType[keyof DropdownVariantsType]

export const DropdownSizes = ButtonSizes

export type DropdownSizesType = typeof DropdownSizes
export type DropdownSizeType = DropdownSizesType[keyof DropdownSizesType]

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    label: string,
    triggerProps?: ButtonProps,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps,
    onSelect?: ListItemProps['onSelect'],
    variant?: DropdownVariantType,
    size?: DropdownSizeType
}

export type DropdownRef = {
    open: () => void,
    close: () => void
}

export type DropdownComponent = ForwardRefExoticComponent<DropdownProps & RefAttributes<DropdownRef>>