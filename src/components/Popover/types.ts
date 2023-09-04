import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    RefAttributes
} from 'react'

import type { AnchorProps } from '../Anchor/types'

export const PopoverVariants = {
    Normal: 'normal' as const,
    Dim: 'dim' as const
}

type PopoverVariantsType = typeof PopoverVariants
type PopoverVariantType = PopoverVariantsType[keyof PopoverVariantsType]

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    show?: boolean,
    withPointer?: boolean,
    backgroundColor?: string,
    portalWhenMounted?: boolean,
    fixedHeight?: number,
    onClickOutside?: (event: MouseEvent | TouchEvent) => void,
    onScrollOutside?: () => void
}

type PopoverRef = HTMLDivElement

type PopoverComponent = ForwardRefExoticComponent<PopoverProps & AnchorProps & RefAttributes<PopoverRef>>

export type {
    PopoverComponent, PopoverProps, PopoverRef, PopoverVariantType, PopoverVariantsType
}

