import type {
    ForwardRefExoticComponent,
    ReactNode,
    RefAttributes
} from 'react'

import type { InputProps } from '../Input/types'

type CustomInputProps = Pick<InputProps, 'size' | 'variant'>

export interface InputGroupProps extends CustomInputProps {
    className?: string,
    children?: ReactNode
}

export type InputGroupComponent = ForwardRefExoticComponent<InputGroupProps & RefAttributes<HTMLDivElement>>