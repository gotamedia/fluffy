import type {
    FC,
    HTMLAttributes
} from 'react'

export interface CardParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string
}

export type CardParagraphComponent = FC<CardParagraphProps>