import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const ContainerBackdrops = {
    Light: 'light' as const,
    Medium: 'medium' as const,
    Strong: 'strong' as const,
    None: 'none' as const
}

export type ContainerBackdropsType = typeof ContainerBackdrops
export type ContainerBackdropType = ContainerBackdropsType[keyof ContainerBackdropsType]

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    backdrop?: ContainerBackdropType
}

export type ContainerRef = HTMLDivElement

export type ContainerComponent = ForwardRefExoticComponent<ContainerProps & RefAttributes<ContainerRef>>