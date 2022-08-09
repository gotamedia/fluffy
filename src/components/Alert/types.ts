import {
    ForwardRefExoticComponent,
    ReactNode,
    RefAttributes
} from 'react'

import { IconType } from "@components/Icon"

import {
    Content,
    Headline,
    Text
} from './style'

export const AlertVariants = {
    Success: 'success' as const,
    Warning: 'warning' as const,
    // Error: 'error' as const
}

export type AlertVariantsType = typeof AlertVariants
export type AlertVariantType = AlertVariantsType[keyof AlertVariantsType]

export type AlertRef = {
    display: (display: boolean) => void
}

export type AlertProps = {
    className?: string,
    defaultDisplay?: boolean,
    icon?: IconType,
    cloasable?: boolean,
    onClose?: () => void,
    variant?: AlertVariantType,
    children?: ReactNode
}

export type AlertComponent = ForwardRefExoticComponent<AlertProps & RefAttributes<AlertRef>>

export type AlertComponentType = AlertComponent & {
    Content: typeof Content,
    Headline: typeof Headline,
    Text: typeof Text
}