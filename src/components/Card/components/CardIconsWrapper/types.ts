import type {
    FC,
    HTMLAttributes,
    ReactNode
} from 'react'

export interface CardIconsWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
}

export type CardIconsWrapperComponent = FC<CardIconsWrapperProps>