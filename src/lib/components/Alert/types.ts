import {
    ForwardRefExoticComponent,
    ReactNode,
    RefAttributes
} from 'react'

import { Icons } from "@components/Icon"

import {
    Content,
    Headline,
    Text
} from './style'

export type AlertVariants = {
    Sucess: 'sucess',
    Warning: 'warning',
    // Error: 'error'
}

export type AlertRef = {
    display: (display: boolean) => void
}

export type AlertProps = {
    className?: string,
    defaultDisplay?: boolean,
    icon?: Icons,
    cloasable?: boolean,
    onClose?: () => void,
    variant?: AlertVariants[keyof AlertVariants],
    children?: ReactNode
}

export type AlertComponent = ForwardRefExoticComponent<AlertProps & RefAttributes<AlertRef>>

export type CompoenntType = AlertComponent & {
    Content: typeof Content,
    Headline: typeof Headline,
    Text: typeof Text
}