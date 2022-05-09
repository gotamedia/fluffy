import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

export const UploadButtonVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    Text: 'text' as const
}

export type UploadButtonVariantsType = typeof UploadButtonVariants
export type UploadButtonVariantType = UploadButtonVariantsType[keyof UploadButtonVariantsType]

export const UploadButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type UploadButtonSizesType = typeof UploadButtonSizes
export type UploadButtonSizeType = UploadButtonSizesType[keyof UploadButtonSizesType]

type NativeUploadButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface UploadButtonProps extends NativeUploadButtonProps {
    size?: UploadButtonSizeType,
    variant?: UploadButtonVariantType,
    children?: ReactNode,
    withIcon?: boolean,
    withFileName?: boolean,
    onFilesChange?: (files: any) => void
}

export type UploadButtonRef = HTMLInputElement

export type UploadButtonComponent = ForwardRefExoticComponent<UploadButtonProps & RefAttributes<UploadButtonRef>>