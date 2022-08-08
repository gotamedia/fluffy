import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'


export type PillVariants = {
    Success: 'success',
    Alert: 'alert',
    Warning: 'warning',
    Disabled: 'disabled'
}

type NativeDivProps = HTMLAttributes<HTMLDivElement>

export interface PillProps extends NativeDivProps {
    children?: ReactNode,
    variant?: PillVariants[keyof PillVariants]
}

export type PillRef = HTMLDivElement

export type PillComponent = ForwardRefExoticComponent<PillProps & RefAttributes<PillRef>>
