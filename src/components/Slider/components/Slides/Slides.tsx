import {
    useMemo,
    Children,
    useCallback
} from 'react'

import SwipeableViews from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils'
import { mod } from 'react-swipeable-views-core'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import useSlider from '../../hooks/useSlider'

import { SliderDirections } from '../../types'

import * as Styled from './style'
import type * as Types from './types'

const VirtualizeSwipeableViews = autoPlay(virtualize(SwipeableViews))

const Slides: Types.SlidesComponent = (props) => {
    const {
        children,
        className,
        slideProps,
        duration = 2000
    } = props
    
    const {
        index,
        direction,
        shouldAutoPlay,
        autoWidth,
        slidesLength,
        wrapperRect,
        loop,
        onChange,
        setSlidesLength,
        getSlideByIndex,
        setSliderInstance
    } = useSlider()

    const slides = useMemo(() => {
        return Children.toArray(children)
    }, [children])

    useIsomorphicLayoutEffect(() => {
        setSlidesLength(slides.length)
    }, [setSlidesLength, slides])

    const slideRenderer = useCallback((params: any) => {
        const { index, key } = params

        const slideIndex = mod(index, slides.length)

        return (
            <Styled.SlideWrapper
                autoWidth={autoWidth}
                key={key}
                {...slideProps}
            >
                {slides[slideIndex]}
            </Styled.SlideWrapper>
        )
    }, [
        slides,
        autoWidth,
        slideProps
    ])

    const containerStyle = {
        width: '100%',
        height: direction === SliderDirections.Vertical ? (
            wrapperRect.height || '100%'
        ) : (
            '100%'
        )
    }

    return (
        slidesLength > 0 ? (
            <VirtualizeSwipeableViews
                className={className}
                ref={setSliderInstance}
                resistance
                slideCount={!loop ? slidesLength : undefined}
                interval={duration}
                autoplay={shouldAutoPlay}
                enableMouseEvents
                index={getSlideByIndex(index)}
                onChangeIndex={onChange}
                slideRenderer={slideRenderer}
                slideStyle={{
                    display: 'flex',
                    height: wrapperRect.height || '100%'
                }}
                containerStyle={containerStyle}
                style={{ width: '100%' }}
                axis={direction === SliderDirections.Vertical ? 'y' : 'x'}
                overscanSlideAfter={5}
                overscanSlideBefore={5}
            />
        ) : null
    )
}

export default Slides