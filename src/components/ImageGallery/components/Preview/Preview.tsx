import {
    useRef,
    useCallback,
    Children
} from 'react'

import classNames from '@utils/classNames'

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
        onChange,
        wrapperRect
    } = useSlider()

    const handleOnScroll = useCallback<WheelEventHandler<HTMLDivElement>>((event) => {
        if (wrapperRef.current && !event.deltaX) {
            wrapperRef.current.scrollLeft += event.deltaY
        }
    }, [])

    const wrapperClassName = classNames({
        'fluffy-image-gallery-preview': true,
        [className || '']: true
    })

    const componentState = {
        width: wrapperRect.width ? `${wrapperRect.width - 200}px` : '100%'
    }

    return (
        <Styled.Wrapper
            className={wrapperClassName}
            ref={wrapperRef}
            onWheel={handleOnScroll}
            $componentState={componentState}
        >
            {
                Children.map(children, (child, idx) => {
                    return (
                        <PreviewItem
                            key={idx}
                            index={idx}
                            active={index === idx}
                            onChange={onChange}
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