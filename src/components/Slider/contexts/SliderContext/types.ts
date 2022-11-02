import type { UseMeasureRect } from '@hooks/useMeasure/types'
import type {
    SliderDirectionType,
    SliderVariantType
} from '../../types'

export type SliderContext = {
    index: number,
    direction: SliderDirectionType,
    variant: SliderVariantType,
    wrapperRef: HTMLDivElement | null,
    wrapperRect: UseMeasureRect,
    slidesLength: number,
    onChange: (index: number) => void,
    setSlidesLength: (length: number) => void,
    getSlideByIndex: (index: number) => number,
    onNext: () => void,
    onPrevious: () => void,
    setSliderInstance: (instance: any) => void,
    revalidateWrapperRect: () => void
}