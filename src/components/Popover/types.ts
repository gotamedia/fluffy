import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    MouseEventHandler,
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
    onClickOutside?: MouseEventHandler<HTMLDivElement>
    preventScrollOutside?: boolean,
    backgroundColor?: string,
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
