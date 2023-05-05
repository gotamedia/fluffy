import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"
import { RibbonFolds, RibbonSides } from "./constants"

interface RibbonProps extends PropsWithChildren<{
    background: string
    color?: string
    fold?: Lowercase<keyof typeof RibbonFolds>
    foldColor?: string
    side?: Lowercase<keyof typeof RibbonSides>
    top?: number | string | number[] | string[]
}> {}

type RibbonRef = HTMLDivElement

type RibbonComponent = ForwardRefExoticComponent<RibbonProps & RefAttributes<RibbonRef>>

export type {
    RibbonComponent,
    RibbonProps,
    RibbonRef
}
