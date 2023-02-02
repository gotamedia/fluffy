import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import LazyImage from './components/LazyImage'

import isNativeLazyLoadingSupported from '@utils/isNativeLazyLoadingSupported'

import * as Styled from './style'
import type * as Types from './types'

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
            useNativeLazyLoading && isNativeLazyLoadingSupported ? (
                <img
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