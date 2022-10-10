import {
    PillVariants,
    PillSizes,
    PillShapes
} from './constants'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { PillProps } from './types'

export type PillThemeType = ComponentTheme<{
    defaultProps: Partial<PillProps>,
    style: {
        root: ThemeStyleItem
    },
    sizes: {
        small: ThemeStyleItem
    },
    shapes: {
        round: ThemeStyleItem,
        rectangle: ThemeStyleItem
    },
    variants: {
        normal: ThemeStyleItem,
        success: ThemeStyleItem,
        alert: ThemeStyleItem,
        warning: ThemeStyleItem
    }
}>

const PillTheme: PillThemeType = {
    defaultProps: {
        variant: PillVariants.Normal,
        size: PillSizes.Small,
        shape: PillShapes.Rectangle
    },
    style: {
        root: ({ theme }) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderRadius: '3px',
            padding: '0px 5px',
            height: '16px',
            fontSize: `${theme.fontSizes[0]}px`,
            fontFamily: theme.fonts.generic[1]
        })
    },
    sizes: {
        small: {
            height: '18px'
        }
    },
    shapes: {
        round: {
            borderRadius: '18px'
        },
        rectangle: {
            borderRadius: '3px'
        }
    },
    variants: {
        normal: {
            color: '8a8a8d',
            backgroundColor: '#e9e9e8',
            borderColor: '#e9e9e8'
        },
        success: {
            color: 'white',
            backgroundColor: '#0ab775',
            borderColor: '#0ab775'
        },
        alert: {
            color: 'white',
            backgroundColor: '#d7170f',
            borderColor: '#d7170f'
        },
        warning: {
            color: '2e2a25',
            backgroundColor: '#fdc800',
            borderColor: '#fdc800'
        }
    }
}

export default PillTheme