import { SliderSizeType } from './../../types';
import type { UseMeasureRect } from '@hooks/useMeasure/types'
import type {
    SliderDirectionType,
    SliderVariantType
} from '../../types'

export type SliderContext = {
    index: number,
    direction: SliderDirectionType,
    variant: SliderVariantType,
    size: SliderSizeType,
    loop?: boolean,
    shouldAutoPlay?: boolean,
    duration?: number,
    dynamicBullets?: boolean,
    autoWidth?: boolean,
    wrapperElement: HTMLDivElement | null,
    wrapperRect: UseMeasureRect,
    slidesLength: number,
    onChange: (index: number) => void,
    setSlidesLength: (length: number) => void,
    getSlideByIndex: (index: number) => number,
    onNext: () => void,
    onPrevious: () => void,
    goToIndex: (index: number) => void,
    setSliderInstance: (instance: any) => void,
    revalidateWrapperRect: () => void,
    setIsFullscreen: (status: boolean) => void,
    setIsFullscreenSupported: (status: boolean) => void
}