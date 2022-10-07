import { tint } from 'polished'

import {
    TextareaSizes,
    TextareaVariants
} from './types'

import type { TextareaProps } from './types'
import type { ThemeStyleItem } from '@root/types'

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

export type TextareaThemeType = {
    defaultProps: Partial<TextareaProps>,
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

const TextareaTheme: TextareaThemeType = {
    defaultProps: {
        size: TextareaSizes.Normal,
        variant: TextareaVariants.Primary
    },
    style: {
        root: {
            resize: 'none',
            display: 'inline-flex',
            appearance: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            whiteSpace: 'nowrap',
            outline: 'none',
            width: '100%',
            borderRadius: '6px',
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
            height: '70px',
            minWidth: '300px',
            fontSize: '14px',
            padding: '8px'
        },
        small: {
            height: '80px',
            minWidth: '300px',
            fontSize: '15px',
            padding: '12px'
        },
        normal: {
            height: '90px',
            minWidth: '300px',
            fontSize: '16px',
            padding: '16px'
        },
        big: {
            height: '100px',
            minWidth: '325px',
            fontSize: '18px',
            padding: '18px'
        },
        huge: {
            height: '120px',
            minWidth: '350px',
            fontSize: '22px',
            padding: '20px'
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

export default TextareaTheme