import { tint } from 'polished'

import {
    ListItemBorders,
    ListItemSizes,
    ListItemTypes
} from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { ListItemProps } from './types'

export type ListItemThemeType = ComponentTheme<{
    defaultProps: Partial<ListItemProps>
    style: {
        root: ThemeStyleItem,
        wrapper: ThemeStyleItem,
        icon: ThemeStyleItem,
        checkIcon: ThemeStyleItem,
        textWrapper: ThemeStyleItem,
        text: ThemeStyleItem,
        subText: ThemeStyleItem,
        border: ThemeStyleItem
    },
    types: {
        normal: ThemeStyleItem,
        select: ThemeStyleItem
    },
    sizes: {
        normal: ThemeStyleItem,
        twoRow: ThemeStyleItem
    },
    borders: {
        normal: ThemeStyleItem,
        full: ThemeStyleItem
    }
}>

const ListItemTheme: ListItemThemeType = {
    defaultProps: {
        type: ListItemTypes.Normal,
        size: ListItemSizes.Normal,
        border: ListItemBorders.Normal,
        asTitle: false,
        scrollOnTargeted: true
    },
    style: {
        root: ({ theme, $componentState }) => ({
            width: '100%',
            padding: '10px 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            outline: 'none',

            '&:hover': {
                ...(!$componentState?.asTitle && !$componentState?.targeted ? {
                    cursor: 'pointer',
                    backgroundColor: tint(0.88, theme.colors.brand)
                } : {}),
            },

            '&:last-of-type': {
                '.fluffy-list-item-border': {
                    display: 'none'
                }
            },

            ...($componentState?.targeted ? {
                cursor: 'default',
                backgroundColor: tint(0.1, theme.colors.brand)
            } : {}),

            ...($componentState?.asTitle ? {
                padding: '8px 0 0 0'
            } : {}),
        }),
        wrapper: ({ $componentState }) => ({
            display: 'flex',
            paddingRight: '30px',
            position: 'relative',
            margin: $componentState?.astitle ? '0 0 8px 0px' : '0 0 10px 0px'
        }),
        icon: ({ $componentState }) => ({
            position: 'absolute',
            left: '10px',

            ...($componentState?.targeted ? {
                color: 'white',
                fill: 'white'
            } : {}),

            ...($componentState?.isTypeSelect ? {
                left: '40px'
            } : {})
        }),
        checkIcon: ({ $componentState }) => ({
            position: 'absolute',
            left: '10px',

            ...($componentState?.targeted ? {
                color: 'white',
                fill: 'white'
            } : {}),
        }),
        textWrapper: {
            width: '100%',
            display: 'flex',
            margin: '0',
            flexDirection: 'column'
        },
        text: ({ $componentState }) => ({
            margin: '0',

            ...($componentState?.targeted ? {
                color: 'white'
            } : {}),

            ...($componentState?.asTitle ? {
                color: 'gray'
            } : {}),
        }),
        subText: ({ $componentState }) => ({
            margin: '0',
            fontSize: '14px',

            ...($componentState?.targeted ? {
                color: 'white'
            } : {}),
        }),
        border: {
            height: '1px',
            backgroundColor: 'lightgray'
        }
    },
    types: {
        normal: ({ $componentState }) => ({
            paddingLeft: $componentState?.hasIcon ? '40px' :'20px'
        }),
        select: ({ $componentState }) => ({
            paddingLeft: $componentState?.hasIcon ? '70px' :'40px'
        })
    },
    sizes: {
        normal: {
            minHeight: '20px'
        },
        twoRow: {
            minHeight: '35px'
        }
    },
    borders: {
        normal: ({ $componentState }) => ({
            marginLeft: '20px',

            ...($componentState?.isTypeSelect && $componentState?.hasIcon ? {
                marginLeft: '40px'
            } : {})
        }),
        full: {
            marginLeft: '0'
        }
    }
}

export default ListItemTheme