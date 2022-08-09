import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListItemProps } from '../ListItem/types'

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    size?: ListItemProps['size'],
    border?: ListItemProps['border'],
    type?: ListItemProps['type'],
    onSelect?: ListItemProps['onSelect'],
    allowKeyboardNavigation?: boolean
}

export type ListRef = HTMLDivElement

export type ListComponent = ForwardRefExoticComponent<ListProps & RefAttributes<ListRef>>