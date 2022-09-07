import {
    shade,
    tint
} from 'polished'

import type { ThemeStyleItem } from '@root/types'

const sharedStyle = {
    disabled: {
        '&:disabled': {
            color: '#8A8A8D',
            backgroundColor: '#DADAD8'
        }
    },
    focus: {
        '&:focus': {
            boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
        }
    }
}

export type IconButtonThemeType = {
    style: {
        root: ThemeStyleItem,
        icon: ThemeStyleItem
    },
    sizes: {
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    },
    shapes: {
        square: ThemeStyleItem,
        circle: ThemeStyleItem
    },
    variants: {
        primary: ThemeStyleItem,
        secondary: ThemeStyleItem,
        outline: ThemeStyleItem
    }
}

const IconButtonTheme: IconButtonThemeType = {
    style: {
        root: {
            display: 'inline-flex',
            appearance: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            position: 'relative',
            whiteSpace: 'nowrap',
            outline: 'none',
            width: 'auto',
            fontWeight: 'normal',
            boxSizing: 'border-box',
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        icon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            fill: 'currentColor'
        }
    },
    sizes: {
        tiny: {
            height: '24px',
            minWidth: '24px',
            padding: '0px'
        },
        small: {
            height: '32px',
            minWidth: '32px',
            padding: '0px'
        },
        normal: {
            height: '40px',
            minWidth: '40px',
            padding: '0px'
        },
        big: {
            height: '48px',
            minWidth: '48px',
            padding: '0px'
        },
        huge: {
            height: '50px',
            minWidth: '50px',
            padding: '0px'
        }
    },
    shapes: {
        square: {
            borderStyle: 'solid',
            borderRadius: '2px'
        },
        circle: {
            borderStyle: 'solid',
            borderRadius: '50%'
        }
    },
    variants: {
        primary: ({ theme }) => ({
            color: 'white',
            backgroundColor: theme.colors.brand,
            borderColor: theme.colors.brand,

            '&:hover': {
                '&:not(:disabled)': {
                    color: 'white',
                    backgroundColor: shade(0.08, theme.colors.brand)
                }
            },

            '&:active': {
                '&:not(:disabled)': {
                    color: 'white',
                    backgroundColor: shade(0.18, theme.colors.brand)
                }
            },

            ...sharedStyle.focus,
            ...sharedStyle.disabled
        }),
        secondary: ({ theme }) => ({
            color: theme.colors.brand,
            backgroundColor: tint(0.93, theme.colors.brand),
            borderColor: tint(0.93, theme.colors.brand),

            '&:hover': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.88, theme.colors.brand)
                }
            },

            '&:active': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.82, theme.colors.brand)
                }
            },

            ...sharedStyle.focus,
            ...sharedStyle.disabled
        }),
        outline: ({ theme }) => ({
            color: theme.colors.brand,
            backgroundColor: 'white',
            borderColor: theme.colors.brand,

            '&:hover': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.88, theme.colors.brand)
                }
            },

            '&:active': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.82, theme.colors.brand)
                }
            },

            ...sharedStyle.focus,

            '&:disabled': {
                color: '#8A8A8D',
                backgroundColor: 'transparent'
            }
        })
    }
}

export default IconButtonTheme