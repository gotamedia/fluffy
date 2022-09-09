import { tint } from 'polished'

import type { ThemeStyleItem } from '@root/types'

export type RadioThemeType = {
    style: {
        root: ThemeStyleItem,
        radio: ThemeStyleItem,
        text: ThemeStyleItem
    },
    sizes: {
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    }
}

const RadioTheme: RadioThemeType = {
    style: {
        root: {
            display: 'inline-flex',
        },
        radio: ({ theme }) => ({
            outline: 'none',
            appearance: 'none',
            margin: '0px',
            borderRadius: '50%',
            boxShadow: `${theme.colors.brand} 0px 0px 0px 2px inset`,
            position: 'relative',
            display: 'inline-block',
            textAlign: 'center',

            '&:before': {
                content: '""',
                display: 'block',
                borderRadius: '50%',
                transform: 'scale(0)',
                transformRrigin: 'center',
                transition: '120ms transform ease-in-out',
                backgroundColor: theme.colors.brand,
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

            '&:checked::before': {
                transform: 'scale(1)'
            },

            '&:focus': {
                boxShadow: `${theme.colors.brand} 0px 0px 0px 2px inset, white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px`
            },

            '&:disabled': {
                color: '#959495',
                boxShadow: '#959495 0px 0px 0px 2px inset',

                '&:before': {
                    backgroundColor: '#959495'
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

            '&:checked': {
                '&:before': {
                    width: '8px',
                    height: '8px',
                    margin: '5px auto'
                }
            }
        },
        small: {
            width: '20px',
            height: '20px',

            '&:checked': {
                '&:before': {
                    width: '10px',
                    height: '10px',
                    margin: '5px auto'
                }
            }
        },
        normal: {
            width: '22px',
            height: '22px',

            '&:checked': {
                '&:before': {
                    width: '12px',
                    height: '12px',
                    margin: '5px auto'
                }
            }
        },
        big: {
            width: '24px',
            height: '24px',

            '&:checked': {
                '&:before': {
                    width: '14px',
                    height: '14px',
                    margin: '5px auto'
                }
            }
        },
        huge: {
            width: '26px',
            height: '26px',

            '&:checked': {
                '&:before': {
                    width: '14px',
                    height: '14px',
                    margin: '6px auto'
                }
            }
        }
    }
}

export default RadioTheme