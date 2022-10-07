import {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListItemProps } from '../ListItem/types'
import type { MenuProps } from '../Menu/types'

export interface SubMenuProps extends ListItemProps {
    listProps?: MenuProps['listProps']
}

export type SubMenuRef = HTMLDivElement

export type SubMenuComponent = ForwardRefExoticComponent<SubMenuProps & RefAttributes<SubMenuRef>>