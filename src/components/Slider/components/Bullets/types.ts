import { SliderDirectionType } from "@root/components/Slider/types"
import type { StyledInterpolationFunction } from "@root/types/interpolationFunction"
import type { ForwardRefExoticComponent, RefAttributes } from "react"
import { BulletSizes } from "./constants"

type BulletsProps = {
    className?: string
    clickable?: boolean
    size?: BulletSizes
}

type BulletsComponent = ForwardRefExoticComponent<BulletsProps & RefAttributes<HTMLDivElement>>
type BulletsStyleFn = StyledInterpolationFunction<{ $direction: SliderDirectionType }>

export type {
    BulletsProps,
    BulletsComponent,
    BulletsStyleFn
}
