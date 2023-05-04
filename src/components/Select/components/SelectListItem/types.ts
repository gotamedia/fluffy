import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    MouseEventHandler
} from 'react'

import { Icon } from '@components/Icon'

export const SelectListItemTypes = {
    Normal: 'normal' as const,
    Select: 'select' as const,
    Checkbox: 'checkbox' as const
}

export type SelectListItemType = typeof SelectListItemTypes[keyof typeof SelectListItemTypes]

export interface SelectListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    text: string,
    subText?: string,
    icon?: Icon,
    actionIcon?: Icon,
    type?: SelectListItemType,
    targeted?: boolean,
    selected?: boolean,
    value?: any,
    parentId?: string,
    onSelect?: (value: any, parentId?: any) => void,
    onActionClick?: MouseEventHandler<HTMLElement>,
    scrollOnTargeted?: boolean,
    indeterminate?: boolean
}

export type SelectListItemRef = HTMLDivElement | null

export type SelectListItemComponent = ForwardRefExoticComponent<SelectListItemProps & RefAttributes<SelectListItemRef>>