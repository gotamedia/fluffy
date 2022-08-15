import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

import type { OverlayProps } from '../Overlay'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void,
    withCloseIcon?: boolean,
    overlayProps?: OverlayProps,
    closeOnClickOutside?: boolean
}

export type ModalRef = HTMLDivElement

export type ModalComponent = ForwardRefExoticComponent<ModalProps & RefAttributes<ModalRef>>