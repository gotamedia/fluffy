import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    MouseEventHandler,
    RefAttributes
} from 'react'

import type { AnchorProps } from '../Anchor/types'
import type { OverlayProps } from '../Overlay/types'

export const PopoverVariants = {
    Normal: 'normal' as const,
    Dim: 'dim' as const
}

export type PopoverVariantsType = typeof PopoverVariants
export type PopoverVariantType = PopoverVariantsType[keyof PopoverVariantsType]


export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    show: boolean,
    anchorProps: AnchorProps,
    overlayProps?: OverlayProps,
    onClickOutside?: MouseEventHandler<HTMLDivElement>
}

export type PopoverRef = HTMLDivElement

export type PopoverComponent = ForwardRefExoticComponent<PopoverProps & RefAttributes<PopoverRef>>