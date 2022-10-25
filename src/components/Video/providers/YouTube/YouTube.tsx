import {
    useRef,
    useState,
    useEffect,
} from 'react'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import useVideo from '../../hooks/useVideo/useVideo'

import YoutubeProvider from './provider'

import * as Types from './types'

const YouTubeProvider: Types.YouTubeProvider = () => {
    // eslint-disable-next-line no-undef
    const playerRef = useRef<YT.Player | null>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const {
        id,
        src,
        width,
        height,
        onReady,
        onEvent
    } = useVideo()

    const [isReady, setIsReady] = useState(false)
    const [videoId, setVideoId] = useState(() => YoutubeProvider.getVideoId(src))

    useIsomorphicLayoutEffect(() => {
        const createPlayer = async () => {
            YoutubeProvider.initiate()
            await YoutubeProvider.onReady()

            playerRef.current = new window.YT.Player(`youtube-player-id__${id}`, {
                events: {
                    onReady: () => {
                        setIsReady(true)
                    },
                    onStateChange: (event) => {
                        onEvent(event)
                    }
                }
            })
        }

        createPlayer()

        return () => {
            playerRef.current?.destroy()
        }
    }, [id, onEvent])

    useEffect(() => {
        if (isReady && typeof onReady === 'function') {
            onReady()
        }
    }, [isReady, onReady])

    useEffect(() => {
        setVideoId(YoutubeProvider.getVideoId(src))
    }, [src])

    const videoSrc = YoutubeProvider.getVideoSrc(videoId)

    return (
        videoSrc ? (
            <iframe
                ref={iframeRef}
                id={`fluffy-youtube-player-${id}`}
                width={width || '720'}
                height={height || '405'}
                src={videoSrc}
                allowFullScreen={true}
                frameBorder={'0'}
            />
        ) : (
            null
        )
    )
}

export default YouTubeProvider