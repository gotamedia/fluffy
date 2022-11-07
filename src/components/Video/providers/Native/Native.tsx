import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import useVideo from '../../hooks/useVideo'

import * as Styled from './style'
import type * as Types from './types'
import type { ReactEventHandler } from 'react'

const NativeProvider: Types.NativeProvider = forwardRef((props, ref) => {
    const {
        onCanPlay,
        className,
        ...filteredProps
    } = props

    const {
        id,
        src,
        width,
        height,
        onReady
    } = useVideo()

    const handleOnCanPlay: ReactEventHandler<HTMLVideoElement> = useCallback((event) => {
        onReady()

        if (typeof onCanPlay === 'function') {
            onCanPlay(event)
        }
    }, [onReady, onCanPlay])

    const videoClassName = classNames({
        'fluffy-video-native': true,
        [className || '']: true
    })

    return (
        src ? (
            <Styled.Video
                controls
                id={`fluffy-native-player-${id}`}
                width={width}
                height={height}
                className={videoClassName}
                {...filteredProps}
                onCanPlay={handleOnCanPlay}
                ref={ref}
            >
                <source src={src}/>
            </Styled.Video>
        ) : (
            null
        )
    )
})

export default NativeProvider