import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

import type { Prefix } from '@root/types/prefix'

import {
    ButtonVariants,
    ButtonVariantTypes,
    ButtonSizes
} from '@components/Button/types'

import type {
    ButtonVariant,
    ButtonVariantType,
    ButtonSize
} from '@components/Button/types'

export const UploadButtonVariants = ButtonVariants

export const UploadButtonVariantTypes = ButtonVariantTypes

export const UploadButtonSizes = ButtonSizes

type NativeUploadButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface UploadButtonProps extends NativeUploadButtonProps {
    size?: ButtonSize,
    variant?: ButtonVariant,
    variantType?: ButtonVariantType,
    children?: ReactNode,
    withIcon?: boolean,
    withFileName?: boolean,
    onFilesChange?: (files: any) => void
}

export type StyledUploadButtonProps = Prefix<
    Pick<
    UploadButtonProps,
        'size' |
        'variant' |
        'variantType'
    >,
    '$'
>

export type UploadButtonRef = HTMLInputElement

export type UploadButtonComponent = ForwardRefExoticComponent<UploadButtonProps & RefAttributes<UploadButtonRef>>