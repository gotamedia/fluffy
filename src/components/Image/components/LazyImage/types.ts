import type {
    ImgHTMLAttributes,
    ReactElement,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { IntersectionOptions } from 'react-intersection-observer'

export const ImageLoadingEffects = {
    Blur: 'blur' as const,
    None: 'none' as const
}

export type ImageLoadingEffectsType = typeof ImageLoadingEffects
export type ImageLoadingEffectType = ImageLoadingEffectsType[keyof ImageLoadingEffectsType]

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    thumbnail?: ReactElement
    thumbnailSrc?: string,
    withPlaceholder?: boolean,
    observerOptions?: IntersectionOptions,
    loadingEffect?: ImageLoadingEffectType,
    transitionDuration?: number
}

export type LazyImageRef = HTMLImageElement

export type LazyImageComponent = ForwardRefExoticComponent<LazyImageProps & RefAttributes<LazyImageRef>>