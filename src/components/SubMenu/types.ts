import {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListItemProps } from '../ListItem/types'

export interface SubMenuProps extends ListItemProps {

}

export type SubMenuRef = HTMLDivElement

export type SubMenuComponent = ForwardRefExoticComponent<SubMenuProps & RefAttributes<SubMenuRef>>