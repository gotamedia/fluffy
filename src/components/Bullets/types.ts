import { SliderDirectionType } from "@root/components/Slider/types";
import type { StyledInterpolationFunction } from "@root/types/interpolationFunction";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { BulletSizes } from "../Slider/components/Bullets/constants";

type BulletsProps = {
    className?: string
    size?: BulletSizes
    dynamicBullets?: boolean
    index: number
    disabled?: boolean
    active?: boolean
    count?: number
    activeIndex: number
    onBulletClick?: (index: number) => void | null
    direction: SliderDirectionType
}

type SliderBulletsProps = {
    className?: string
}

type BulletsComponent = ForwardRefExoticComponent<BulletsProps & RefAttributes<HTMLDivElement>>
type SliderBulletsComponent = ForwardRefExoticComponent<SliderBulletsProps & RefAttributes<HTMLDivElement>>
type BulletsStyleFn = StyledInterpolationFunction<{ direction: SliderDirectionType, dynamicBullets: boolean }>

export type {
    BulletsProps,
    BulletsComponent,
    BulletsStyleFn,
    SliderBulletsComponent
};

