import type {
    FC,
    HTMLAttributes
} from 'react'

export interface CardTitleProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string
}

export type CardTitleComponent = FC<CardTitleProps>