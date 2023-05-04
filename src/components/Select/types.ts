import {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListProps } from '../List/types'
import type { ListItemProps } from '../ListItem/types'
import type { AnchorProps } from '../Anchor/types'
import type { SelectTriggerProps } from './components/SelectTrigger/types'

export const SelectTypes = {
    Normal: 'normal' as const,
    Select: 'select' as const,
    Checkbox: 'checkbox' as const
}

export type SelectTypeType = typeof SelectTypes[keyof typeof SelectTypes]

export const SelectStates = {
    Default: 'default' as const,
    Error: 'error' as const
}

export type SelectState = typeof SelectStates[keyof typeof SelectStates]

export type BaseSelectItem = ListItemProps & {
    id: string,
    label: string,
    selected: boolean
} 

export type BaseNestedSelectItem = BaseSelectItem & {
    parentId: string
} 

export type SelectItem = BaseSelectItem & {
    nested?: BaseNestedSelectItem[]
} 

export interface SelectProps extends Omit<AnchorProps, 'onReset' | 'onChange' |'onSelect'> {
    items: SelectItem[],
    portalWhenMounted?: boolean,
    showResetButton?: boolean;
    showApplyButton?: boolean;
    triggerProps?: Omit<SelectTriggerProps, 'label' | 'isOpen' | 'disabled' | 'state' | 'toggleOpen'>,
    listProps?: ListProps,
    closeOnSelect?: boolean,
    isMultiSelect?: boolean,
    width?: number | string,
    minWidth?: number | string,
    type?: SelectTypeType,
    state?: SelectState,
    disabled?: boolean,
    showFilter?: boolean,
    closeOnScrollOutside?: boolean,
    i18n?: {
        reset?: string,
        apply?: string
    },
    onReset?: () => void,
    onApply?: () => void,
    onChange?: (items: any[]) => void,
    onClickOutside?: (event: MouseEvent | TouchEvent) => void,
}

export type SelectRef = {
    open: () => void,
    close: () => void
}

export type SelectComponent = ForwardRefExoticComponent<SelectProps & RefAttributes<SelectRef>>