import { forwardRef } from 'react'

import LazyImage from './components/LazyImage'

import isNativeLazyLoadingSupported from '@utils/isNativeLazyLoadingSupported'

import type * as Types from './types'

const Image: Types.ImageComponent = forwardRef((props, ref) => {
    const {
        lazyLoading,
        thumbnail,
        thumbnailSrc,
        withPlaceholder,
        useNativeLazyLoading = false,
        loadingEffect = 'blur',
        transitionDuration = 1,
        observerOptions = {},
        ...filteredProps
    } = props

    return (
        lazyLoading ? (
            useNativeLazyLoading && isNativeLazyLoadingSupported ? (
                <img
                    ref={ref}
                    {...filteredProps}
                    loading={'lazy'}
                />
            ) : (
                <LazyImage
                    ref={ref}
                    {...filteredProps}
                    thumbnail={thumbnail}
                    thumbnailSrc={thumbnailSrc}
                    withPlaceholder={withPlaceholder}
                    loadingEffect={loadingEffect}
                    transitionDuration={transitionDuration}
                    observerOptions={observerOptions}
                />
            )
        ) : (
            <img
                ref={ref}
                {...filteredProps}
            />
        )
    )
})

Image.displayName = 'Image'

export default Image