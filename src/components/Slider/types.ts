import SlidesComponent from './components/Slides'
import NavigatorComponent from './components/Navigator'
import FullscreenComponent from './components/Fullscreen'
import SlidesCountComponent from './components/SlidesCount'

import type {
    ReactNode,
    ForwardRefExoticComponent,
    RefAttributes,
    HTMLAttributes
} from 'react'

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
    variant?: SliderVariantType
}

export type SliderRef = {
    goNext: () => void,
    goBack: () => void,
    revalidateWrapperRect: () => void,
    _domElement: HTMLDivElement | null
}

export type SliderComponent = ForwardRefExoticComponent<SliderProps & RefAttributes<SliderRef>>

export type SliderComponentType = SliderComponent & {
    Slides: typeof SlidesComponent,
    Navigator: typeof NavigatorComponent,
    Fullscreen: typeof FullscreenComponent,
    SlidesCount: typeof SlidesCountComponent
}