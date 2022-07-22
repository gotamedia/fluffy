import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

import {
    ButtonVariants,
    ButtonSizes
} from '../Button/types'

import type {
    ButtonVariantType,
    ButtonSizeType
} from '../Button/types'

export const UploadButtonVariants = ButtonVariants

export const UploadButtonSizes = ButtonSizes

type NativeUploadButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface UploadButtonProps extends NativeUploadButtonProps {
    size?: ButtonSizeType,
    variant?: ButtonVariantType,
    children?: ReactNode,
    withIcon?: boolean,
    withFileName?: boolean,
    onFilesChange?: (files: any) => void
}

export type UploadButtonRef = HTMLInputElement

export type UploadButtonComponent = ForwardRefExoticComponent<UploadButtonProps & RefAttributes<UploadButtonRef>>