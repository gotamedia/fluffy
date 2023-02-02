import {
    ListItemBorders,
    ListItemSizes,
    ListItemTypes
} from '../ListItem'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { ListProps } from './types'

export type ListThemeType = ComponentTheme<{
    defaultProps: Partial<ListProps>
    style: {
        root: ThemeStyleItem,
        inputGroup: ThemeStyleItem
        input: ThemeStyleItem
    }
}>

const ListTheme: ListThemeType = {
    defaultProps: {
        type: ListItemTypes.Normal,
        size: ListItemSizes.Normal,
        border: ListItemBorders.Normal,
        allowKeyboardNavigation: true,
        showFilter: false
    },
    style: {
        root: {
            outline: 'none',
            padding: '5px 0'
        },
        inputGroup: {
            width: "100%"

        },
        input: {
            minWidth: 'unset',

            '&:focus': {
                boxShadow: 'unset'
            }
        }
    }
}

export default ListTheme