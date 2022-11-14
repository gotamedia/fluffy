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
        goToIndex
    } = props

    const itemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (active && itemRef.current) {
            scrollIntoView(itemRef.current, {
                behavior: (instructions) => {
                    const [item] = instructions

                    if (item && item.el) {   
                        let newLeft = item.left
    
                        if (item.el.scrollLeft > item.left) {
                            newLeft = item.left - 10
                        } else {
                            newLeft = item.left + 10
                        }
    
                        item.el.scrollLeft = newLeft
                    }
                }
            })
        }
    }, [active])

    const handleOnClick = useCallback(() => {
        goToIndex(index)
    }, [goToIndex, index])

    const componentState = {
        active: active
    }

    return (
        <Styled.Wrapper
            ref={itemRef}
            onClick={handleOnClick}
            $componentState={componentState}
            className={'fluffy-image-gallery-preview-item'}
        >
            {children}
        </Styled.Wrapper>
    )
}

export default PreviewItem