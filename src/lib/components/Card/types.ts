import CardImage from './components/CardImage'
import CardBody from './components/CardBody'
import CardTitle from './components/CardTitle'
import CardHeadline from './components/CardHeadline'
import CardParagraph from './components/CardParagraph'
import CardIconsWrapper from './components/CardIconsWrapper'

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
    size?: CardSizeType,
    variant?: CardVariantType,
    loading?: boolean
}

export type CardComponent = FC<CardProps>

export type ComponentType = CardComponent & {
    Image: typeof CardImage,
    Body: typeof CardBody,
    Title: typeof CardTitle,
    Headline: typeof CardHeadline,
    Paragraph: typeof CardParagraph,
    IconsWrapper: typeof CardIconsWrapper
}