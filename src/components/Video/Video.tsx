import {
    useMemo,
    useCallback
} from 'react'

import { v4 as createUUID } from 'uuid'

import { VideoContext } from './contexts/VideoContext'

import type * as Types from './types'

export const Video: Types.VideoComponent = (props) => {
    const {
        id = createUUID(),
        src,
        width = 720,
        height = 405,
        config = {},
        onReady,
        onEvent,
        children
    } = props

    const handleOnReady = useCallback(() => {
        if (typeof onReady === 'function') {
            onReady()
        }
    }, [onReady])

    const handleOnEvent = useCallback((event: any) => {
        if (typeof onEvent === 'function') {
            onEvent(event)
        }
    }, [onEvent])

    const context = useMemo(() => {
        return {
            id: id,
            src: src,
            width: width,
            height: height,
            config: config,
            onReady: handleOnReady,
            onEvent: handleOnEvent
        }
    }, [
        id,
        src,
        width,
        height,
        config,
        handleOnReady,
        handleOnEvent
    ])

    return (
        <VideoContext.Provider value={context}>
            {children}
        </VideoContext.Provider>
    )
}

export default Video