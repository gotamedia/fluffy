import {
    ImageGalleryVariants,
    ImageGalleryDirections
} from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { ImageGalleryProps } from './types'

export type ImageGalleryThemeType = ComponentTheme<{
    defaultProps: Partial<ImageGalleryProps>,
    style: {
        root: ThemeStyleItem,
        preview: ThemeStyleItem,
        previewItem: ThemeStyleItem
    },
    variants: {
        primary: ThemeStyleItem,
        secondary: ThemeStyleItem,
        outline: ThemeStyleItem
    }
}>

const ImageGalleryTheme: ImageGalleryThemeType = {
    defaultProps: {
        direction: ImageGalleryDirections.Horizontal,
        variant: ImageGalleryVariants.Primary
    },
    style: {
        root: {},
        preview: ({ $componentState }) => ({
            position: 'absolute',
            display: 'flex',
            background: 'rgba(85, 86, 90, 0.5)',
            overflow: 'auto',
            padding: '4px 15px',
            flexDirection: 'row',
            left: '50%',
            bottom: '15px',
            transform: 'translateX(-50%)',
            maxHeight: '75px',
            minHeight: '75px',
            maxWidth: $componentState?.width || '100%',
        }),
        previewItem: ({ $componentState }) => ({
            width: '65px',
            height: '65px',
            minWidth: '65px',
            minHeight: '65px',
            maxWidth: '65px',
            maxHeight: '65px',
            position: 'relative',
            display: 'flex',
            margin: 'auto 10px',

            '*': {
                margin: 'auto'
            },

            ...($componentState?.active ? {
                boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
            } : {})
        })
    },
    variants: {
        primary: {},
        secondary: {},
        outline: {}
    }
}

export default ImageGalleryTheme