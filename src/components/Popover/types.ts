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
    show: boolean,
    withPointer?: boolean,
    onClickOutside?: (event: MouseEvent | TouchEvent) => void
}

type PopoverRef = HTMLDivElement

type PopoverComponent = ForwardRefExoticComponent<PopoverProps & AnchorProps & RefAttributes<PopoverRef>>

export type {
    PopoverVariantsType,
    PopoverVariantType,
    PopoverRef,
    PopoverProps,
    PopoverComponent
}
