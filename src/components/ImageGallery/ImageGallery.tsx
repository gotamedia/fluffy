import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import * as Styled from './style'
import type * as Types from './types'

export const ImageGallery: Types.ImageGalleryComponent = forwardRef((props, ref) => {
    const {
        children,
        className,
        ...filteredProps
    } = props

    const wrapperClassName = classNames({
        'fluffy-image-gallery': true,
        [className || '']: true
    })

    return (
        <Styled.Slider
            {...filteredProps}
            className={wrapperClassName}
            ref={ref}
        >
            {children}
        </Styled.Slider>
    )
})

ImageGallery.displayName = 'ImageGallery'

export default ImageGallery