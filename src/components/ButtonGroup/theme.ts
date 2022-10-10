import {
    ButtonGroupVariants,
    ButtonGroupSizes
 } from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { ButtonGroupProps } from './types'

export type ButtonGroupThemeType = ComponentTheme<{
    defaultProps: Partial<ButtonGroupProps>,
    style: {
        root: ThemeStyleItem,
        button: ThemeStyleItem
    },
    variants: {
        secondary: ThemeStyleItem
    }
}>

const ButtonGroupTheme: ButtonGroupThemeType = {
    defaultProps: {
        variant: ButtonGroupVariants.Primary,
        size: ButtonGroupSizes.Normal
    },
    style: {
        root: {
            display: 'inline-flex',
        },
        button: {
            'button': {
                '&:not(:only-child)': {
                    '&:first-child': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0
                    },
        
                    '&:not(:first-child):not(:last-child)': {
                        borderRadius: 0,
                        borderLeft: '1px solid currentcolor'
                    },
        
                    '&:last-child': {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderLeft: '1px solid currentcolor'
                    }
                },
    
                '&:focus': {
                    zIndex: 1
                }
            }
        }
    },
    variants: {
        secondary: {
            'button': {
                '&:not(:first-child):not(:last-child)': {
                    '&:focus': {
                        borderLeftColor: 'transparent'
                    }
                },
    
                '&:last-child': {
                    '&:focus': {
                        borderLeftColor: 'transparent'
                    }
                }
            }
        }
    }
}

export default ButtonGroupTheme