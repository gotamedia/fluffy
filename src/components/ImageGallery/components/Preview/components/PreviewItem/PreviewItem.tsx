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
                scrollMode: 'always',
                behavior: 'smooth',
                inline: 'center'
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