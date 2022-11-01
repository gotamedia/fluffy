import {
    useState,
    useCallback
} from 'react'

import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const FullScreen: Types.FullScreenComponent = () => {
    const [isFullscreen, setIsFullScreen] = useState(false)

    const {
        variant,
        wrapperRef,
        revalidateWrapperRect
    } = useSlider()

    const handleToggleFullScreen = useCallback(() => {
        revalidateWrapperRect()

        if (isFullscreen && document.fullscreenElement) {
            document.exitFullscreen()
            setIsFullScreen(false)
        } else {
            wrapperRef?.requestFullscreen()
            setIsFullScreen(true)
        }
    }, [isFullscreen, revalidateWrapperRect, wrapperRef])

    return (
        <Styled.FullScreenIcon
            variant={variant}
            $isFullscreen={isFullscreen}
            onClick={handleToggleFullScreen}
        />
    )
}

export default FullScreen