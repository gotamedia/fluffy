import type { FC, ReactNode } from 'react'

export interface CardBodyProps {
    className?: string,
    children?: ReactNode
}

export type CardBodyComponent = FC<CardBodyProps>