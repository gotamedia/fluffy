import {
    useCallback,
    useEffect
} from 'react'

import classNames from '@utils/classNames'

import useFullscreen from '@hooks/useFullscreen'

import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Fullscreen: Types.FullscreenComponent = ({ className }) => {
    const {
        variant,
        wrapperElement,
        revalidateWrapperRect,
        setIsFullscreen,
        setIsFullscreenSupported
    } = useSlider()

    const {
        open,
        close,
        isFullscreen,
        isSupported
    } = useFullscreen(wrapperElement)

    useEffect(() => {
        setIsFullscreen(isFullscreen)
    }, [setIsFullscreen, isFullscreen])

    useEffect(() => {
        setIsFullscreenSupported(isSupported)
    }, [setIsFullscreenSupported, isSupported])
    
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
    
    const wrapperClassName = classNames({
        'fluffy-slider-fullscreen': true,
        [className || '']: true
    })

    const componentState = {
        isFullscreen: isFullscreen
    }

    return (
        <>
            <Styled.FullscreenIcon
                className={wrapperClassName}
                variant={variant}
                $componentState={componentState}
                onClick={handleToggleFullscreen}
            />
        </>
    )
}

export default Fullscreen