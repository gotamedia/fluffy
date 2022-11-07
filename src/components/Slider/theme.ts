import {
    SliderVariants,
    SliderDirections
} from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { SliderProps } from './types'

export type SliderThemeType = ComponentTheme<{
    defaultProps: Partial<SliderProps>,
    style: {
        root: ThemeStyleItem,
        fullscreenWrapper: ThemeStyleItem,
        fullscreen: ThemeStyleItem,
        slidesCount: ThemeStyleItem,
        slides: ThemeStyleItem,
        navigation: ThemeStyleItem
    },
    variants: {
        primary: ThemeStyleItem,
        secondary: ThemeStyleItem,
        outline: ThemeStyleItem
    }
}>

const SliderTheme: SliderThemeType = {
    defaultProps: {
        direction: SliderDirections.Horizontal,
        variant: SliderVariants.Primary
    },
    style: {
        root: {
            display: 'flex',
            position: 'relative',
            outline: 'none'
        },
        fullscreenWrapper: {
            position: 'fixed',
            inset: '0',
            display: 'flex',
            backgroundColor: 'black',

            '.fluffy-slider': {
                margin: 'auto',
                width: '100% !important',
                height: '100% !important'
            }
        },
        fullscreen: {
            position: 'absolute',
            right: '10px',
            top: '10px'
        },
        slidesCount: {
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            padding: '10px',
            borderRadius: '2px',
            color: 'white',
            background: 'rgba(85, 86, 90, 0.5)'
        },
        slides: {
            margin: 'auto',
            width: '100%',
            height: '100%',
            display: 'flex'
        },
        navigation: ({ $componentState }) => ({
            '.fluffy-slider-navigation-previous': {
                position: 'absolute',

                ...($componentState?.direction === SliderDirections.Horizontal ? {
                    top: '50%',
                    left: '10px',
                    transform: 'translate(-0, -50%)'
                } : {
                    top: '50%',
                    right: '10px',
                    transform: 'translate(-0, calc(-50% - 30px))'
                })
            },
            '.fluffy-slider-navigation-next': {
                position: 'absolute',

                ...($componentState?.direction === SliderDirections.Horizontal ? {
                    top: '50%',
                    right: '10px',
                    transform: 'translate(-0, -50%)'
                } : {
                    top: '50%',
                    right: '10px',
                    transform: 'translate(-0, calc(-50% + 30px))'
                })
            }
        })
    },
    variants: {
        primary: {},
        secondary: {},
        outline: {}
    }
}

export default SliderTheme