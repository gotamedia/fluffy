import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    MouseEventHandler
} from 'react'

import { Icon } from '@components/Icon'

export const ListItemTypes = {
    Normal: 'normal' as const,
    Select: 'select' as const,
    Checkbox: 'checkbox' as const
}

export type ListItemType = typeof ListItemTypes[keyof typeof ListItemTypes]

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    subText?: string,
    icon?: Icon,
    actionIcon?: Icon,
    type?: ListItemType,
    targeted?: boolean,
    selected?: boolean,
    value?: any,
    onSelect?: (value: any) => void,
    onActionClick?: MouseEventHandler<HTMLElement>,
    scrollOnTargeted?: boolean,
    indeterminate?: boolean
}

export type ListItemRef = HTMLDivElement

export type ListItemComponent = ForwardRefExoticComponent<ListItemProps & RefAttributes<ListItemRef>>