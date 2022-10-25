import { keyframes } from 'styled-components'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { IconProps } from './types'

export type IconThemeType = ComponentTheme<{
    defaultProps: Partial<IconProps>,
    style: {
        root: ThemeStyleItem
    },
    sizes: {
        micro: ThemeStyleItem,
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    }
}>

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const IconTheme: IconThemeType = {
    defaultProps: {},
    style: {
        //@ts-ignore
        root: ({ $componentState }) => ({
            display: 'inline-flex',

            ...($componentState?.spin ? {
                svg: {
                    animationName: spin,
                    animationDuration: '2500ms',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                }
            } : {})
        })
    },
    sizes: {
        micro: {
            height: '12px',
            width: 'auto'
        },
        tiny: {
            height: '16px',
            width: 'auto'
        },
        small: {
            height: '20px',
            width: 'auto'
        },
        normal: {
            height: '24px',
            width: 'auto'
        },
        big: {
            height: '28px',
            width: 'auto'
        },
        huge: {
            height: '36px',
            width: 'auto'
        }
    }
}

export default IconTheme