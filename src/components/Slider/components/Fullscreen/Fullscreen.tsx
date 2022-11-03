import { useCallback, useEffect } from 'react'

import useFullscreen from '@hooks/useFullscreen'

import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Fullscreen: Types.FullscreenComponent = ({ className }) => {
    const {
        variant,
        wrapperElement,
        revalidateWrapperRect,
        onFullscreenChange
    } = useSlider()

    const {
        open,
        close,
        isFullscreen
    } = useFullscreen(wrapperElement)

    useEffect(() => {
        if (typeof onFullscreenChange === 'function') {
            onFullscreenChange(isFullscreen)
        }
    }, [isFullscreen, onFullscreenChange])
    
    const handleToggleFullscreen = useCallback(() => {
        revalidateWrapperRect()

        if (isFullscreen) {
            close()
        } else {
            open()
        }
    }, [
        close,
        isFullscreen,
        open,
        revalidateWrapperRect
    ])

    return (
        <>
            <Styled.FullscreenIcon
                className={className}
                variant={variant}
                $isFullscreen={isFullscreen}
                onClick={handleToggleFullscreen}
            />
        </>
    )
}

export default Fullscreen