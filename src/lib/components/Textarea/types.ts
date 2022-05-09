import type {
    TextareaHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const TextareaVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const
}

export type TextareaVariantsType = typeof TextareaVariants
export type TextareaVariantType = TextareaVariantsType[keyof TextareaVariantsType]

export const TextareaSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type TextareaSizesType = typeof TextareaSizes
export type TextareaSizeType = TextareaSizesType[keyof TextareaSizesType]

type NativeTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>

export interface TextareaProps extends NativeTextareaProps {
    size?: TextareaSizeType,
    variant?: TextareaVariantType
}

export type TextareaRef = HTMLTextAreaElement

export type TextareaComponent = ForwardRefExoticComponent<TextareaProps & RefAttributes<TextareaRef>>