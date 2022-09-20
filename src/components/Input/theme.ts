import { tint } from 'polished'

import {
    InputSizes,
    InputVariants
} from './types'

import type { ThemeStyleItem } from '@root/types'
import type { InputProps } from './types'

const sharedStyle = {
    focus: {
        '&:focus': {
            boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
        }
    },
    disabled: {
        '&:disabled': {
            color: '#8A8A8D',
            borderColor: '#DADAD8',
            backgroundColor: '#F5F5F5'
        }
    }
}

export type InputThemeType = {
    defaultProps: Partial<InputProps>,
    style: {
        root: ThemeStyleItem,
        label: ThemeStyleItem,
    },
    sizes: {
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    },
    variants: {
        primary: ThemeStyleItem,
        secondary: ThemeStyleItem,
        outline: ThemeStyleItem
    }
}

const InputTheme: InputThemeType = {
    defaultProps: {
        size: InputSizes.Normal,
        variant: InputVariants.Primary
    },
    style: {
        root: {
            display: 'inline-flex',
            appearance: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            whiteSpace: 'nowrap',
            outline: 'none',
            width: '100%',
            borderRadius: '2px',
            fontWeight: 'normal',
            boxSizing: 'border-box'
        },
        label: ({ theme }) => ({
            margin: '0 0 5px 0',
            color: theme.colors.brand
        })
    },
    sizes: {
        tiny: {
            height: '24px',
            minWidth: '300px',
            fontSize: '14px',
            padding: '0px 8px'
        },
        small: {
            height: '32px',
            minWidth: '300px',
            fontSize: '15px',
            padding: '0px 8px'
        },
        normal: {
            height: '40px',
            minWidth: '300px',
            fontSize: '16px',
            padding: '0px 10px'
        },
        big: {
            height: '48px',
            minWidth: '300px',
            fontSize: '18px',
            padding: '0px 16px'
        },
        huge: {
            height: '50px',
            minWidth: '300px',
            fontSize: '22px',
            padding: '0px 18px'
        }
    },
    variants: {
        primary: ({ theme }) => ({
            backgroundColor: tint(0.93, theme.colors.brand),
            border: `1px solid ${theme.colors.brand}`,

            '&:hover': {
                backgroundColor: tint(0.93, theme.colors.brand)
            },

            ...sharedStyle.focus,
            ...sharedStyle.disabled
        }),
        secondary: ({ theme }) => ({
            backgroundColor: tint(0.93, theme.colors.brand),
            border: `1px solid ${tint(0.93, theme.colors.brand)}`,

            '&:hover': {
                backgroundColor: tint(0.93, theme.colors.brand)
            },

            ...sharedStyle.focus,
            ...sharedStyle.disabled
        }),
        outline: ({ theme }) => ({
            backgroundColor: 'white',
            border: `1px solid ${theme.colors.brand}`,

            '&:hover': {
                backgroundColor: tint(0.93, theme.colors.brand)
            },

            ...sharedStyle.focus,
            ...sharedStyle.disabled
        })
    }
}

export default InputTheme