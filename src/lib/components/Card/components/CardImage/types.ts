import type { FC, ImgHTMLAttributes } from 'react'

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    
}

export type CardImageComponent = FC<CardImageProps>