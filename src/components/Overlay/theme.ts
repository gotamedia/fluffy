import type { ThemeStyleItem } from '@root/types'

export type OverlayThemeType = {
    style: {
        root: ThemeStyleItem
    },
    variants: {
        normal: ThemeStyleItem,
        dim: ThemeStyleItem
    }
}

const OverlayTheme: OverlayThemeType = {
    style: {
        root: {
            zIndex: '900',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    },
    variants: {
        normal: {},
        dim: {
            backgroundColor: 'rgba(0, 0, 0, 0.18)'
        }
    }
}

export default OverlayTheme