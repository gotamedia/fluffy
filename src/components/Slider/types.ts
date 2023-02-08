import type {
    ReactNode,
    ForwardRefExoticComponent,
    RefAttributes,
    HTMLAttributes
} from 'react'

import type { SlidesComponent } from './components/Slides/types'
import type { NavigationComponent } from './components/Navigation/types'
import type { FullscreenComponent } from './components/Fullscreen/types'
import type { SlidesCountComponent } from './components/SlidesCount/types'
import type { BulletsComponent } from './components/Bullets'
import { SliderBulletsComponent } from './components/Bullets/types'

export const SliderVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    SecondaryDark: 'secondaryDark' as const,
    Contrast: 'contrast' as const,
}

export type SliderVariantsType = typeof SliderVariants
export type SliderVariantType = SliderVariantsType[keyof SliderVariantsType]

export const SliderSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type SliderSizesType = typeof SliderSizes
export type SliderSizeType = SliderSizesType[keyof SliderSizesType]

export const SliderDirections = {
    Vertical: 'vertical' as const,
    Horizontal: 'horizontal' as const
}

export type SliderDirectionsType = typeof SliderDirections
export type SliderDirectionType = SliderDirectionsType[keyof SliderDirectionsType]

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    index: number,
    children?: ReactNode,
    onChange?: (index: number) => void,
    onNext?: () => void,
    onPrevious?: () => void,
    slidesCount: number,
    autoWidth?: boolean,
    direction?: SliderDirectionType,
    variant?: SliderVariantType,
    size?: SliderSizeType,
    loop?: boolean,
    shouldAutoPlay?: boolean,
    dynamicBullets?: boolean,
    fullscreenClassName?: string,
    onFullscreenChange?: (isFullscreen: boolean) => void
}

export type SliderRef = {
    goNext: () => void,
    goBack: () => void,
    revalidateWrapperRect: () => void,
    _domElement: HTMLDivElement | null
}

export type SliderComponent = ForwardRefExoticComponent<SliderProps & RefAttributes<SliderRef>>

export type SliderSupComponents = {
    Slides: SlidesComponent,
    Navigation: NavigationComponent,
    Fullscreen: FullscreenComponent,
    SliderBullets: SliderBulletsComponent
    SlidesCount: SlidesCountComponent
}

export type SliderComponentType = SliderComponent & SliderSupComponents