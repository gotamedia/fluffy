import {
    useRef,
    useEffect,
    useCallback
} from 'react'

import scrollIntoView from 'scroll-into-view-if-needed'

import * as Styled from './style'
import type * as Types from './types'

const PreviewItem: Types.PreviewItemComponent = (props) => {
    const {
        index,
        active,
        children,
        onChange
    } = props

    const itemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (active && itemRef.current) {
            scrollIntoView(itemRef.current, {
                behavior: (instructions) => {
                    const [{ el, left }] = instructions

                    let newLeft = left

                    if (el.scrollLeft > left) {
                        newLeft = left - 10
                    } else {
                        newLeft = left + 10
                    }

                    el.scrollLeft = newLeft
                }
            })
        }
    }, [active])

    const handleOnClick = useCallback(() => {
        onChange(index)
    }, [onChange, index])

    return (
        <Styled.Wrapper
            ref={itemRef}
            onClick={handleOnClick}
            $active={active}
        >
            {children}
        </Styled.Wrapper>
    )
}

export default PreviewItem