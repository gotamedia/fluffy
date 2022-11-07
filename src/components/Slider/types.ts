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

export const SliderVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const
}

export type SliderVariantsType = typeof SliderVariants
export type SliderVariantType = SliderVariantsType[keyof SliderVariantsType]

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
    direction?: SliderDirectionType,
    variant?: SliderVariantType,
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
    SlidesCount: SlidesCountComponent
}

export type SliderComponentType = SliderComponent & SliderSupComponents