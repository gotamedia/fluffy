import {
    SliderVariants,
    SliderDirections
} from '../Slider/types'

import type {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type {
    SliderProps,
    SliderRef,
    SliderSupComponents
} from '../Slider/types'

import type { PreviewComponent } from './components/Preview/types'

export const ImageGalleryVariants = SliderVariants

export const ImageGalleryDirections = SliderDirections

export interface ImageGalleryProps extends SliderProps {
    
}

export type ImageGalleryRef = SliderRef & {
    
}

export type ImageGalleryComponent = ForwardRefExoticComponent<ImageGalleryProps & RefAttributes<ImageGalleryRef>>

export type ImageGalleryComponentType = ImageGalleryComponent & SliderSupComponents & {
    Preview: PreviewComponent
}