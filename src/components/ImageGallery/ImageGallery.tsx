import { forwardRef } from 'react'

import Slider from '@components/Slider'

import type * as Types from './types'

export const ImageGallery: Types.ImageGalleryComponent = forwardRef((props, ref) => {
    const {
        children,
        ...filteredProps
    } = props

    return (
        <Slider
            {...filteredProps}
            ref={ref}
        >
            {children}
        </Slider>
    )
})

ImageGallery.displayName = 'ImageGallery'

export default ImageGallery