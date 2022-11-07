import {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect,
} from 'react'

import classNames from '@utils/classNames'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import useVideo from '../../hooks/useVideo'

import Provider from './provider'

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
    const [videoId, setVideoId] = useState(() => Provider.getVideoId(src))

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
            Provider.initiate()
            await Provider.onReady()

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
        if (isReady) {
            onReady()
        }
    }, [isReady, onReady])

    useEffect(() => {
        setVideoId(Provider.getVideoId(src))
    }, [src])

    const videoSrc = Provider.getVideoSrc(videoId)

    const iframeClassName = classNames({
        'fluffy-video-youtube': true,
        [props.className || '']: true
    })

    return (
        videoSrc ? (
            <iframe
                id={`fluffy-youtube-player-${id}`}
                title={`YouTube video player`}
                width={width}
                height={height}
                allowFullScreen={true}
                frameBorder={'0'}
                {...props}
                className={iframeClassName}
                src={videoSrc}
                ref={setIframeRef}
            />
        ) : (
            null
        )
    )
})

export default YouTubeProvider