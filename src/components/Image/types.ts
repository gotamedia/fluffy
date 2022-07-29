import type {
    ImgHTMLAttributes,
    ReactElement,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { IntersectionOptions } from 'react-intersection-observer'

import type { ImageLoadingEffectType } from './components/LazyImage/types'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    lazyLoading?: boolean,
    useNativeLazyLoading?: boolean,
    thumbnail?: ReactElement,
    thumbnailSrc?: string,
    withPlaceholder?: boolean,
    observerOptions?: IntersectionOptions,
    loadingEffect?: ImageLoadingEffectType,
    transitionDuration?: number
}

export type ImageRef = HTMLImageElement

export type ImageComponent = ForwardRefExoticComponent<ImageProps & RefAttributes<ImageRef>>