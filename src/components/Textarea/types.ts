import type {
    TextareaHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { Prefix } from '@root/types/prefix'

export const TextareaVariants = {
    Primary: 'primary' as const
}

export type TextareaVariant = typeof TextareaVariants[keyof typeof TextareaVariants]

export const TextareaVariantTypes = {
    Default: 'default' as const,
    Generic: 'generic' as const
}

export type TextareaVariantType = typeof TextareaVariantTypes[keyof typeof TextareaVariantTypes]

export const TextareaStates = {
    Default: 'default' as const,
    Error: 'error' as const
}

export type TextareaState = typeof TextareaStates[keyof typeof TextareaStates]

export const TextareaSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type TextareaSize = typeof TextareaSizes[keyof typeof TextareaSizes]

type NativeTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>

export interface TextareaProps extends NativeTextareaProps {
    size?: TextareaSize,
    variant?: TextareaVariant,
    variantType?: TextareaVariantType,
    state?: TextareaState,
    onValueChange?: (value: string) => void,
    label?: string
}

export type StyledTextareaProps = Prefix<
    Pick<
        TextareaProps,
        'size' |
        'variant' |
        'variantType' |
        'state'
    >,
    '$'
>


export type TextareaRef = HTMLTextAreaElement

export type TextareaComponent = ForwardRefExoticComponent<TextareaProps & RefAttributes<TextareaRef>>