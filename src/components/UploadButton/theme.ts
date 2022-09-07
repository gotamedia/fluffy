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

export type UploadButtonThemeType = {
    style: {
        root: ThemeStyleItem,
        main: ThemeStyleItem,
        icon: ThemeStyleItem,
        label: ThemeStyleItem
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
        outline: ThemeStyleItem,
        text: ThemeStyleItem
    }
}

const UploadButtonTheme: UploadButtonThemeType = {
    style: {
        root: {
            display: 'flex',
            position: 'relative'
        },
        main: {
            display: 'inline-flex',
            appearance: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            position: 'relative',
            whiteSpace: 'nowrap',
            outline: 'none',
            width: 'auto',
            borderRadius: '2px',
            fontWeight: 'normal',
            borderWidth: '1px',
            borderStyle: 'solid',
            boxSizing: 'border-box'
        },
        icon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            fill: 'currentColor',
            marginRight: '10px'
        },
        label: {
            color: '#494949',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            margin: 'auto 0 auto 15px'
        }
    },
    sizes: {
        tiny: {
            height: '24px',
            minWidth: '24px',
            fontSize: '14px',
            padding: '0px 8px'
        },
        small: {
            height: '32px',
            minWidth: '32px',
            fontSize: '15px',
            padding: '0px 12px'
        },
        normal: {
            height: '40px',
            minWidth: '40px',
            fontSize: '16px',
            padding: '0px 16px'
        },
        big: {
            height: '48px',
            minWidth: '48px',
            fontSize: '18px',
            padding: '0px 18px'
        },
        huge: {
            height: '50px',
            minWidth: '50px',
            fontSize: '20px',
            padding: '0px 20px'
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
        }),
        text: ({ theme }) => ({
            color: theme.colors.brand,
            backgroundColor: 'transparent',
            borderColor: 'transparent',

            '&:hover': {
                '&:not(:disabled)': {
                    textDecoration: 'underline'
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

export default UploadButtonTheme