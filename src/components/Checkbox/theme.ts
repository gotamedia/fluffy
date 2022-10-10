import {
    shade,
    tint
} from 'polished'

import { CheckboxSizes } from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { CheckboxProps } from './types'

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

export type CheckboxThemeType = ComponentTheme<{
    defaultProps: Partial<CheckboxProps>,
    style: {
        root: ThemeStyleItem,
        checkbox: ThemeStyleItem,
        text: ThemeStyleItem
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
}>

const CheckboxTheme: CheckboxThemeType = {
    defaultProps: {
        size: CheckboxSizes.Normal
    },
    style: {
        root: {
            display: 'inline-flex',
        },
        checkbox: ({ theme }) => ({
            appearance: 'none',
            margin: '0',
            font: 'inherit',
            border: `2px solid ${theme.colors.brand}`,
            borderRadius: '4px',
            display: 'flex',

            '&:before': {
                content: '""',
                margin: 'auto',
                clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
                transform: 'scale(0)',
                transformOrigin: 'bottom left',
                transition: '120ms transform ease-in-out',
                boxShadow: `inset 1em 1em ${theme.colors.brand}`
            },

            '&:checked::before': {
                transform: 'scale(1)'
            },

            '&:hover': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.90, theme.colors.brand)
                }
            },

            '&:active': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.82, theme.colors.brand)
                }
            },

            '&:focus': {
                boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
            },

            '&:disabled': {
                color: '#959495',
                borderColor: '#959495',
                
                '&:before': {
                    boxShadow: 'inset 1em 1em #959495'
                }
            }
        }),
        text: ({ $componentState }) => ({
            paddingLeft: '10px',
            margin: 'auto 0',
            color: $componentState?.disabled ? '#959495' : 'unset'
        })
    },
    sizes: {
        tiny: {
            width: '18px',
            height: '18px',

            '&:before': {
                width: '10px',
                height: '10px'
            }
        },
        small: {
            width: '20px',
            height: '20px',

            '&:before': {
                width: '12px',
                height: '12px'
            }
        },
        normal: {
            width: '22px',
            height: '22px',

            '&:before': {
                width: '14px',
                height: '14px'
            }
        },
        big: {
            width: '24px',
            height: '24px',

            '&:before': {
                width: '16px',
                height: '16px'
            }
        },
        huge: {
            width: '26px',
            height: '26px',

            '&:before': {
                width: '18px',
                height: '18px'
            }
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

export default CheckboxTheme