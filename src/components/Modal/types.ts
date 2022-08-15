import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    RefAttributes
} from 'react'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    onClose?: () => void
}

export type ModalRef = HTMLDivElement

export type ModalComponent = ForwardRefExoticComponent<ModalProps & RefAttributes<ModalRef>>