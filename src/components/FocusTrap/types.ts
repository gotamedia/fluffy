import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefObject,
    RefAttributes,
} from 'react'

export interface FocusTrapProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean,
    trapTarget?: RefObject<Element>,
    focusableElementsQuery?: string[],
    useGlobalListener?: boolean
}

export type FocusTrapRef = HTMLDivElement

export type FocusTrapComponent = ForwardRefExoticComponent<FocusTrapProps & RefAttributes<FocusTrapRef>>