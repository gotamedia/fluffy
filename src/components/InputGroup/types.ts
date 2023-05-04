import type {
    ForwardRefExoticComponent,
    ReactNode,
    RefAttributes
} from 'react'

import type { Prefix } from '@root/types/prefix'

import type { InputProps } from '../Input/types'

type CustomInputProps = Pick<
    InputProps,
    'size' |
    'variant' |
    'variantType' |
    'state' |
    'disabled' |
    'style'
>

export interface InputGroupProps extends CustomInputProps {
    className?: string,
    children?: ReactNode
}

export type StyledInputGroupProps = Prefix<
    Pick<
        InputGroupProps,
        'size' |
        'variant' |
        'variantType' |
        'state' |
        'disabled'
    >,
    '$'
>


export type InputGroupComponent = ForwardRefExoticComponent<InputGroupProps & RefAttributes<HTMLDivElement>>