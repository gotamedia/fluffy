import {
    HTMLAttributes,
    RefObject,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const SheetDirections = {
    Top: 'top' as const,
    Right: 'right' as const,
    Bottom: 'bottom' as const,
    Left: 'left' as const
}

export type SheetDirectionsType = typeof SheetDirections
export type SheetDirectionType = SheetDirectionsType[keyof SheetDirectionsType]


export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
    duration?: number,
    direction?: SheetDirectionType,
    parentRef?: RefObject<HTMLDivElement>,
    openOnMount?: boolean,
    forceRender?: boolean
}

export type SheetRef = {
    open: () => void,
    close: () => void
}

export type SheetComponent = ForwardRefExoticComponent<SheetProps & RefAttributes<SheetRef | undefined>>