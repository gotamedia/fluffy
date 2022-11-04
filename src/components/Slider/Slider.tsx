import {
    forwardRef,
    useRef,
    useState,
    useCallback,
    useMemo,
    useImperativeHandle,
    useEffect
} from 'react'

import * as ReversePortals from 'react-reverse-portal'

import useMeasure from '@hooks/useMeasure'

import { SliderContext } from './contexts/SliderContext'

import {
    SliderDirections,
    SliderVariants
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { KeyboardEventHandler } from 'react'
import Portal from '../Portal'

export const Slider: Types.SliderComponent = forwardRef((props, ref) => {
    const {
        index,
        onChange,
        children,
        onNext,
        onPrevious,
        onKeyDown,
        onFullscreenChange,
        direction = SliderDirections.Horizontal,
        variant = SliderVariants.Primary,
        fullscreenClassName,
        ...filteredProps
    } = props

    const portalNode = useMemo(() => ReversePortals.createHtmlPortalNode({
        attributes: {
            class: `fluffy-slider-portal-node`
        }
    }), [])

    const indexMultiplierRef = useRef(0)

    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(null)
    const [slidesLength, setSlidesLength] = useState(0)
    const [sliderInstance, setSliderInstance] = useState<any>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isFullscreenSupported, setIsFullscreenSupported] = useState(false)

    const {
        rect: wrapperRect,
        revalidate: revalidateWrapperRect
    } = useMeasure(wrapperElement)

    useEffect(() => {
        if (typeof onFullscreenChange === 'function') {
            onFullscreenChange(isFullscreen)
        }
    }, [onFullscreenChange, isFullscreen])

    const getSlidesSet = useCallback(() => {
        const slidesSet = [...new Array(slidesLength)].map((_, idx) => {
            if (indexMultiplierRef.current === 0) {
                return idx
            } else {
                return idx + (slidesLength * indexMultiplierRef.current)
            }
        })

        return slidesSet
    }, [slidesLength])

    const getMultiplayer = useCallback((newIndex: number) => {
        const slidesSet = getSlidesSet()

        if (!slidesSet.includes(newIndex)) {
            if (newIndex > slidesSet[slidesSet.length - 1]) {
                indexMultiplierRef.current = indexMultiplierRef.current + 1
            } else {
                indexMultiplierRef.current = indexMultiplierRef.current - 1
            }
        }
    }, [getSlidesSet])

    const getIndexBySlide = useCallback((slide: number) => {
        const slidesSet = getSlidesSet()
        return slidesSet.findIndex(item => item === slide)
    }, [getSlidesSet])

    const getSlideByIndex = useCallback((index: number) => {
        const slidesSet = getSlidesSet()
        return slidesSet[index] || slidesSet[0] || 0
    }, [getSlidesSet])

    const handleSetSliderInstance = useCallback((instance: any) => {
        setSliderInstance(instance)
    }, [])

    const handleOnChange = useCallback((newIndex: number) => {
        getMultiplayer(newIndex)

        if (typeof onChange === 'function') {
            onChange(getIndexBySlide(newIndex))
        }
    }, [getIndexBySlide, getMultiplayer, onChange])

    const handleOnNextSlide = useCallback(() => {
        if (sliderInstance) {
            sliderInstance?.handleChangeIndex(index + 1, index)

            if (typeof onNext === 'function') {
                onNext()
            }
        }
    }, [index, onNext, sliderInstance])

    const handleOnPreviousSlide = useCallback(() => {
        if (sliderInstance) {
            sliderInstance?.handleChangeIndex(index - 1, index)

            if (typeof onPrevious === 'function') {
                onPrevious()
            }
        }
    }, [index, onPrevious, sliderInstance])

    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        switch (event.code) {
            case 'ArrowLeft':
            case 'ArrowUp': {
                handleOnPreviousSlide()
                break
            }

            case 'ArrowRight':
            case 'ArrowDown': {
                handleOnNextSlide()
                break
            }
        }
    }, [handleOnNextSlide, handleOnPreviousSlide, onKeyDown])

    useImperativeHandle(ref, () => {
        return {
            goNext: handleOnNextSlide,
            goBack: handleOnPreviousSlide,
            revalidateWrapperRect: revalidateWrapperRect,
            _domElement: wrapperElement
        }
    }, [
        handleOnNextSlide,
        handleOnPreviousSlide,
        revalidateWrapperRect,
        wrapperElement
    ])

    const context = useMemo(() => {
        return {
            index: index,
            variant: variant,
            direction: direction,
            wrapperElement: wrapperElement,
            wrapperRect: wrapperRect,
            slidesLength: slidesLength,
            revalidateWrapperRect: revalidateWrapperRect,
            onChange: handleOnChange,
            setSliderInstance: handleSetSliderInstance,
            setSlidesLength: setSlidesLength,
            getSlideByIndex: getSlideByIndex,
            onNext: handleOnNextSlide,
            onPrevious: handleOnPreviousSlide,
            setIsFullscreen: setIsFullscreen,
            setIsFullscreenSupported: setIsFullscreenSupported
        }
    }, [
        index,
        variant,
        direction,
        wrapperElement,
        wrapperRect,
        slidesLength,
        revalidateWrapperRect,
        handleOnChange,
        handleSetSliderInstance,
        getSlideByIndex,
        handleOnNextSlide,
        handleOnPreviousSlide,
        setIsFullscreen,
        setIsFullscreenSupported
    ])

    return (
        <SliderContext.Provider value={context}>
            <ReversePortals.InPortal node={portalNode}>
                <Styled.Wrapper
                    {...filteredProps}
                    onKeyDown={handleOnKeyDown}
                    tabIndex={0}
                    ref={setWrapperElement}
                >
                    {children}
                </Styled.Wrapper>
            </ReversePortals.InPortal>

            {
                isFullscreen && !isFullscreenSupported ? (
                    <Portal>
                        <Styled.FullscreenWrapper className={fullscreenClassName}>
                            <ReversePortals.OutPortal node={portalNode} />
                        </Styled.FullscreenWrapper>
                    </Portal>
                ) : (
                    <ReversePortals.OutPortal node={portalNode} />
                )
            }

        </SliderContext.Provider>
    )
})

Slider.displayName = 'Slider'

export default Slider