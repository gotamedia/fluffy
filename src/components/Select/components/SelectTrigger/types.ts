import {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { SelectState } from '../../types'
import type { Prefix } from '@root/types/prefix'

export interface SelectTriggerProps extends HTMLAttributes<HTMLDivElement> {
    label?: string,
    isOpen: boolean,
    disabled?: boolean,
    state?: SelectState,
    toggleOpen: () => void
}

export type StyledSelectTriggerProps = Prefix<
    Pick<
        SelectTriggerProps,
        'disabled' |
        'state'
    >,
    '$'
>


export type SelectTriggerComponent = ForwardRefExoticComponent<SelectTriggerProps & RefAttributes<HTMLDivElement>>