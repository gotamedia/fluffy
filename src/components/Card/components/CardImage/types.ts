import type { FC, ImgHTMLAttributes } from 'react'
import type { ImageProps } from '../../../Image/types'

export interface CardImageProps extends ImageProps, ImgHTMLAttributes<HTMLImageElement> {
    
}

export type CardImageComponent = FC<CardImageProps>