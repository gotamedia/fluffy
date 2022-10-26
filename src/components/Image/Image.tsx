import {
    forwardRef,
    useState,
    useEffect
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import LazyImage from './components/LazyImage'

import * as Styled from './style'
import type * as Types from './types'

let isNativeLazyLoadingSupported: boolean | undefined

export const Image: Types.ImageComponent = forwardRef((props, ref) => {
    const {
        lazyLoading,
        thumbnail,
        thumbnailSrc,
        withPlaceholder,
        useNativeLazyLoading,
        loadingEffect,
        transitionDuration,
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

    const className = classNames({
        'fluffy-image': true,
        [filteredProps.className || '']: true
    })

    const imageProps = {
        ...filteredProps,
        className: className
    }

    return (
        lazyLoading ? (
            useNativeLazyLoading && doesSupportNativeLoading ? (
                <Styled.Image
                    ref={ref}
                    {...imageProps}
                    loading={'lazy'}
                />
            ) : (
                <LazyImage
                    ref={ref}
                    {...imageProps}
                    thumbnail={thumbnail}
                    thumbnailSrc={thumbnailSrc}
                    withPlaceholder={withPlaceholder}
                    loadingEffect={loadingEffect}
                    transitionDuration={transitionDuration}
                    observerOptions={observerOptions}
                />
            )
        ) : (
            <Styled.Image
                ref={ref}
                {...imageProps}
            />
        )
    )
})

Image.displayName = 'Image'

export default withThemeProps(Image) as Types.ImageComponent