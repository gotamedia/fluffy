import { tint } from 'polished'

import type { ThemeStyleItem } from '@root/types'

export type TagThemeType = {
    style: {
        root: ThemeStyleItem,
        label: ThemeStyleItem,
        divider: ThemeStyleItem,
        icon: ThemeStyleItem
    },
    sizes: {
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem
    }
}

const TagTheme: TagThemeType = {
    style: {
        root: ({ $componentState }) => ({
            boxSizing: 'border-box',
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4px 16px',
            position: 'relative',
            border: '1px solid black',
            backgroundColor: '#ffffff',

            ...($componentState?.disabled ? {
                opacity: 0.6
            } : {})
        }),
        label: {
            fontWeight: '700',
            lineHeight: '16px',
            color: 'black',
            flex: 'none',
            order: '0',
            flexGrow: '0'
        },
        divider: {
            width: '1px',
            height: '100%',
            backgroundColor: 'black'
        },
        icon: {
            borderRadius: '50%',
            color: 'black',
            borderColor: 'black',

            '&:hover:not(:disabled)': {
                backgroundColor: tint(0.88, 'black')
            }
        }
    },
    sizes: {
        small: {
            gap: '8px',
            height: '24px',
            borderRadius: '12px',
            padding: '3px 8px',

            '.fluffy-tag-label': {
                fontSize: '12px'
            },
            
            '.fluffy-tag-divider': {

            },
            
            '.fluffy-tag-icon': {
                width: '16px',
                height: '16px',
                margin: 'auto',
                minWidth: 'unset',
        
                'svg': {
                    height: '10px'
                }
            }
        },
        normal: {
            gap: '10px',
            height: '32px',
            borderRadius: '16px',
            padding: '4px 14px',

            '.fluffy-tag-label': {
                fontSize: '14px'
            },
            
            '.fluffy-tag-divider': {

            },
            
            '.fluffy-tag-icon': {
                width: '18px',
                height: '18px',
                margin: 'auto',
                minWidth: 'unset',
        
                'svg': {
                    height: '12px'
                }
            }
        },
        big: {
            gap: '12px',
            height: '40px',
            borderRadius: '20px',
            padding: '4px 14px',

            '.fluffy-tag-label': {
                fontSize: '16px'
            },
            
            '.fluffy-tag-divider': {
                width: '2px'
            },
            
            '.fluffy-tag-icon': {
                
            }
        }
    }
}

export default TagTheme