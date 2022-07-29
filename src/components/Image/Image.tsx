import {
    forwardRef,
    useState,
    useEffect
} from 'react'

import LazyImage from './components/LazyImage'

import type * as Types from './types'

let isNativeLazyLoadingSupported: boolean | undefined

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

    const [doesSupportNativeLoading, setDoesSupportNativeLoading] = useState(isNativeLazyLoadingSupported)
    
    useEffect(() => {
        if (typeof isNativeLazyLoadingSupported === 'undefined') {
            isNativeLazyLoadingSupported = 'loading' in HTMLImageElement.prototype
            setDoesSupportNativeLoading(isNativeLazyLoadingSupported)
        }
    }, [])

    return (
        lazyLoading ? (
            useNativeLazyLoading && doesSupportNativeLoading ? (
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