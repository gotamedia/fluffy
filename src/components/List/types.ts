import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListItemProps } from '../ListItem'

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    size?: ListItemProps['size'],
    border?: ListItemProps['border'],
    type?: ListItemProps['type'],
    onSelect?: ListItemProps['onSelect'],
    allowKeyboardNavigation?: boolean,
    showFilter?: boolean
}

export type ListRef = HTMLDivElement & {
    isFocused: boolean,
    setFocus: (focused: boolean) => void
}

export type ListComponent = ForwardRefExoticComponent<ListProps & RefAttributes<ListRef>>