import {
    useRef,
    useCallback,
    Children
} from 'react'

import useSlider from '@components/Slider/hooks/useSlider'

import PreviewItem from './components/PreviewItem'

import * as Styled from './style'
import type * as Types from './types'
import type { WheelEventHandler } from 'react'

const Preview: Types.PreviewComponent = (props) => {
    const {
        className,
        children
    } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const {
        index,
        goToIndex,
        wrapperRect
    } = useSlider()

    const handleOnScroll = useCallback<WheelEventHandler<HTMLDivElement>>((event) => {
        if (wrapperRef.current && !event.deltaX) {
            wrapperRef.current.scrollLeft += event.deltaY
        }
    }, [])

    return (
        <Styled.Wrapper
            className={className}
            ref={wrapperRef}
            onWheel={handleOnScroll}
            $width={wrapperRect.width ? `${wrapperRect.width - 200}px` : '100%'}
        >
            {
                Children.map(children, (child, idx) => {
                    return (
                        <PreviewItem
                            key={idx}
                            index={idx}
                            active={index === idx}
                            goToIndex={goToIndex}
                        >
                            {child}
                        </PreviewItem>
                    )
                })
            }
        </Styled.Wrapper>
    )
}

export default Preview