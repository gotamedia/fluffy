import {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect,
} from 'react'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import useVideo from '../../hooks/useVideo/useVideo'

import YoutubeProvider from './provider'

import * as Types from './types'

const YouTubeProvider: Types.YouTubeProvider = forwardRef((props, ref) => {
    const {
        id,
        src,
        width,
        height,
        onReady,
        onEvent
    } = useVideo()

    // eslint-disable-next-line no-undef
    const [player, setPlayer] = useState<YT.Player | null>(null)
    const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
    const [isReady, setIsReady] = useState(false)
    const [videoId, setVideoId] = useState(() => YoutubeProvider.getVideoId(src))

    useImperativeHandle(ref, () => {
        return {
            player: player,
            _domRef: iframeRef
        }
    }, [player, iframeRef])

    useIsomorphicLayoutEffect(() => {
        // eslint-disable-next-line no-undef
        let _player = null as YT.Player | null

        const createPlayer = async () => {
            YoutubeProvider.initiate()
            await YoutubeProvider.onReady()

            _player = new window.YT.Player(`youtube-player-id__${id}`, {
                events: {
                    onReady: () => {
                        setIsReady(true)
                    },
                    onStateChange: (event) => {
                        onEvent(event)
                    }
                }
            })

            setPlayer(_player)
        }

        createPlayer()

        return () => {
            _player?.destroy()
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
                id={`fluffy-youtube-player-${id}`}
                title={`YouTube video player`}
                width={width || '720'}
                height={height || '405'}
                allowFullScreen={true}
                frameBorder={'0'}
                {...props}
                src={videoSrc}
                ref={setIframeRef}
            />
        ) : (
            null
        )
    )
})

export default YouTubeProvider