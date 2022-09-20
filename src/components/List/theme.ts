import {
    ListItemBorders,
    ListItemSizes,
    ListItemTypes
} from '../ListItem'

import type { ThemeStyleItem } from '@root/types'
import type { ListProps } from './types'

export type ListThemeType = {
    defaultProps: Partial<ListProps>
    style: {
        root: ThemeStyleItem,
        inputGroup: ThemeStyleItem
        input: ThemeStyleItem
    }
}

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
            padding: '5px 0',
            display: 'flex',
            flexDirection: 'column'
        },
        inputGroup: {
            marginBottom: '5px',

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