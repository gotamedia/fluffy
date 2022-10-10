import { tint } from 'polished'

import { SwitchButtonSizes } from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { SwitchButtonProps } from './types'

export type SwitchButtonThemeType = ComponentTheme<{
    defaultProps: Partial<SwitchButtonProps>,
    style: {
        wrapper: ThemeStyleItem,
        root: ThemeStyleItem,
        text: ThemeStyleItem
    },
    sizes: {
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    }
}>

const SwitchButtonTheme: SwitchButtonThemeType = {
    defaultProps: {
        size: SwitchButtonSizes.Normal
    },
    style: {
        wrapper: {
            display: 'inline-flex'
        },
        root: ({ theme }) => ({
            appearance: 'none',
            outline: 'none',
            margin: '0px',
            borderRadius: '34px',
            backgroundColor: 'rgb(51, 51, 51)',

            '&:before': {
                content: '""',
                display: 'inline-block',
                borderRadius: '50%',
                backgroundColor: 'white',
                transition: 'transform 300ms ease 0s'
            },
        
            '&:checked': {
                backgroundColor: theme.colors.brand
            },
        
            '&:hover': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.25, 'rgb(51, 51, 51)'),
        
                    '&:checked': {
                        backgroundColor: tint(0.25, theme.colors.brand)
                    }
                }
            },
        
            '&:active': {
                '&:not(:disabled)': {
                    backgroundColor: tint(0.1, 'rgb(51, 51, 51)'),
        
                    '&:checked': {
                        backgroundColor: tint(0.1, theme.colors.brand)
                    }
                }
            },
        
            '&:focus': {
                boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
            },
        
            '&:disabled': {
                color: '#959495',
                backgroundColor: '#959495'
            }
        }),
        text: ({ $componentState }) => ({
            paddingLeft: '10px',
            margin: 'auto 0',

            ...($componentState?.disabled ? {
                color: '#959495'
            } : {})
        })
    },
    sizes: {
        tiny: {
            width: '40px',
            height: '20px',
            
            '&:before': {
                width: '14px',
                height: '14px',
                marginTop: '3px',
                marginLeft: '3px'
            },

            '&:checked': {
                '&:before': {
                    transform: 'translateX(20px)'
                }
            }
        },
        small: {
            width: '44px',
            height: '22px',
            
            '&:before': {
                width: '16px',
                height: '16px',
                marginTop: '3px',
                marginLeft: '3px'
            },

            '&:checked': {
                '&:before': {
                    transform: 'translateX(22px)'
                }
            }
        },
        normal: {
            width: '48px',
            height: '24px',
            
            '&:before': {
                width: '18px',
                height: '18px',
                marginTop: '3px',
                marginLeft: '3px'
            },

            '&:checked': {
                '&:before': {
                    transform: 'translateX(24px)'
                }
            }
        },
        big: {
            width: '52px',
            height: '28px',
            
            '&:before': {
                width: '18px',
                height: '18px',
                marginTop: '5px',
                marginLeft: '5px'
            },

            '&:checked': {
                '&:before': {
                    transform: 'translateX(24px)'
                }
            }
        },
        huge: {
            width: '58px',
            height: '30px',
            
            '&:before': {
                width: '20px',
                height: '20px',
                marginTop: '5px',
                marginLeft: '5px'
            },

            '&:checked': {
                '&:before': {
                    transform: 'translateX(28px)'
                }
            }
        }
    }
}

export default SwitchButtonTheme