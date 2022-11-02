import { useCallback } from 'react'

import useFullscreen from '@hooks/useFullscreen'

import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Fullscreen: Types.FullscreenComponent = ({ className }) => {
    const {
        variant,
        wrapperElement,
        revalidateWrapperRect
    } = useSlider()

    const {
        open,
        close,
        isFullscreen
    } = useFullscreen(wrapperElement)
    
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