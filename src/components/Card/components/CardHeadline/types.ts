import type {
    FC,
    HTMLAttributes
} from 'react'

export interface CardHeadlineProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string
}

export type CardHeadlineComponent = FC<CardHeadlineProps>