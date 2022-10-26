import {
    forwardRef,
    useCallback
} from 'react'

import useVideo from '../../hooks/useVideo/useVideo'

import * as Types from './types'
import type { ReactEventHandler } from 'react'

const NativeProvider: Types.NativeProvider = forwardRef((props, ref) => {
    const {
        onCanPlay,
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

    return (
        src ? (
            <video
                controls
                id={`fluffy-native-player-${id}`}
                width={width || '720'}
                height={height || '405'}
                {...filteredProps}
                onCanPlay={handleOnCanPlay}
                ref={ref}
            >
                <source src={src}/>
            </video>
        ) : (
            null
        )
    )
})

export default NativeProvider