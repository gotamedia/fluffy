import type {
    FC,
    HTMLAttributes
} from 'react'

export interface CardBodyProps extends HTMLAttributes<HTMLParagraphElement> {

}

export type CardBodyComponent = FC<CardBodyProps>