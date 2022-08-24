import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import { IconType } from '../Icon'

export const ListItemTypes = {
    Normal: 'normal' as const,
    Select: 'select' as const
}

export type ListItemTypesType = typeof ListItemTypes
export type ListItemTypeType = ListItemTypesType[keyof ListItemTypesType]

export const ListItemSizes = {
    Normal: 'normal' as const,
    TwoRow: 'twoRow' as const
}

export type ListItemSizesType = typeof ListItemSizes
export type ListItemSizeType = ListItemSizesType[keyof ListItemSizesType]

export const ListItemBorders = {
    Normal: 'normal' as const,
    Full: 'full' as const
}

export type ListItemBordersType = typeof ListItemBorders
export type ListItemBorderType = ListItemBordersType[keyof ListItemBordersType]

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    subText?: string,
    size?: ListItemSizeType,
    icon?: IconType,
    border?: ListItemBorderType,
    type?: ListItemTypeType,
    targeted?: boolean,
    selected?: boolean,
    value?: any,
    onSelect?: (value: any) => void,
    scrollOnTargeted?: boolean,
    asTitle?: boolean
}

export type ListItemRef = HTMLDivElement

export type ListItemComponent = ForwardRefExoticComponent<ListItemProps & RefAttributes<ListItemRef>>