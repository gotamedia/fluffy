import { BulletsProps } from "@components/Slider/components/Bullets/types"
import type { StyledInterpolationFunction } from "@root/types/interpolationFunction"
import { StyledPrefixThemeProps } from "@root/types/prefix"
import type { ForwardRefExoticComponent, RefAttributes } from "react"

interface BulletProps extends BulletsProps {
    ariaLabel: string
    bulletIndex: number
}

type BulletStyledProps = StyledPrefixThemeProps<Omit<BulletsProps, "className">> & {
    $active: boolean
}

type BulletComponent = ForwardRefExoticComponent<BulletProps & RefAttributes<HTMLButtonElement>>
type BulletStyleFn = StyledInterpolationFunction<BulletStyledProps>

export type {
    BulletProps,
    BulletComponent,
    BulletStyleFn
}
