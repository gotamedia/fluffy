import type {
    HTMLAttributes,
    KeyboardEventHandler,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ListItemProps } from '../ListItem'

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    type?: ListItemProps['type'],
    onSelect?: ListItemProps['onSelect'],
    allowKeyboardNavigation?: boolean
}

export type ListRef = HTMLDivElement & {
    isFocused: boolean,
    setFocus: (focused: boolean) => void,
    handleOnKeyDown: KeyboardEventHandler<HTMLDivElement>
}

export type ListComponent = ForwardRefExoticComponent<ListProps & RefAttributes<ListRef>>