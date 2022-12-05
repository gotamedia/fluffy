import CardImage from './components/CardImage'
import CardBody from './components/CardBody'
import CardSubHeadline from './components/CardSubHeadline'
import CardHeadline from './components/CardHeadline'
import CardParagraph from './components/CardParagraph'

import type {
    FC,
    HTMLAttributes,
    ReactNode
} from 'react'

export const CardVariants = {
    Light: 'light' as const,
    Dark: 'dark' as const
}

export type CardVariantsType = typeof CardVariants
export type CardVariantType = CardVariantsType[keyof CardVariantsType]

export const CardSizes = {
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const
}

export type CardSizesType = typeof CardSizes
export type CardSizeType = CardSizesType[keyof CardSizesType]

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    loading?: boolean
}

export type CardComponent = FC<CardProps>

export type CardComponentType = CardComponent & {
    Image: typeof CardImage,
    Body: typeof CardBody,
    SubHeadline: typeof CardSubHeadline,
    Headline: typeof CardHeadline,
    Paragraph: typeof CardParagraph
}