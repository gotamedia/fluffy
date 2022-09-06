import type { ThemeStyleItem } from '@root/types'

export type ButtonGroupThemeType = {
    style: {
        root: ThemeStyleItem,
        button: ThemeStyleItem
    },
    variants: {
        secondary: ThemeStyleItem
    }
}

const ButtonGroupTheme: ButtonGroupThemeType = {
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