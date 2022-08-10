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

export const SelectVariants = {
    Primary: ButtonVariants.Primary,
    Secondary: ButtonVariants.Secondary,
    Outline: ButtonVariants.Outline
}

export type SelectVariantsType = typeof SelectVariants
export type SelectVariantType = SelectVariantsType[keyof SelectVariantsType]

export const SelectSizes = ButtonSizes

export type SelectSizesType = typeof SelectSizes
export type SelectSizeType = SelectSizesType[keyof SelectSizesType]

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    triggerProps?: ButtonProps,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>,
    listProps?: ListProps,
    onSelect?: ListItemProps['onSelect'],
    closeOnSelect?: boolean,
    isMultiSelect?: boolean,
    width?: number | string,
    minWidth?: number | string,
    selected: any[],
    variant?: SelectVariantType,
    size?: SelectSizeType,
    disabled?: boolean
}

export type SelectRef = {
    open: () => void,
    close: () => void
}

export type SelectComponent = ForwardRefExoticComponent<SelectProps & RefAttributes<SelectRef>>
