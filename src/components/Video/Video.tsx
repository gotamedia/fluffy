import {
    useRef,
    useState,
    useCallback,
    useEffect,
    useLayoutEffect
} from 'react'

import { v4 as createUUID } from 'uuid'

import YoutubeProvider from './providers/Youtube'

import * as Styled from './style'
import type { ChangeEventHandler } from 'react'

const Video = (props: any) => {
    // eslint-disable-next-line no-undef
    const playerRef = useRef<YT.Player | null>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const id = useRef(createUUID())
    const mouseLeavetimeout = useRef<number | null>(null)
    const preventProgressUpdate = useRef(false)

    const [isReady, setIsReady] = useState(false)

    const [isBuffering, setIsBuffering] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [supportFullscreen, setSupportFullscreen] = useState(false)
    const [showControls, setShowControls] = useState(true)

    const [videoId, setVideoId] = useState(() => YoutubeProvider.getVideoId(props.src))

    useEffect(() => {
        setVideoId(YoutubeProvider.getVideoId(props.src))
    }, [props.src])

    useLayoutEffect(() => {
        const createPlayer = async () => {
            YoutubeProvider.initiate()
            await YoutubeProvider.onReady()

            playerRef.current = new window.YT.Player(`youtube-player-id-${id.current}`, {
                events: {
                    onReady: (event) => {
                        setInterval(() => {
                            setCurrentTime(playerRef.current?.getCurrentTime() || 0)
                        }, 1000)

                        setTotalTime(event.target.getDuration())
                        setIsReady(true)
                    },
                    onStateChange: (event) => {
                        const status = event.data

                        switch (status) {
                            case window.YT.PlayerState.BUFFERING:
                                setIsBuffering(true)
                                break
                            case window.YT.PlayerState.PAUSED:
                                setIsBuffering(false)
                                setIsPlaying(false)
                                break
                            case window.YT.PlayerState.PLAYING:
                                setIsPlaying(true)
                                preventProgressUpdate.current = false
                                break
                            
                        }
                    }
                }
            })
        }

        createPlayer()

        return () => {
            playerRef.current?.destroy()
        }
    }, [])

    useEffect(() => {
        if (typeof iframeRef.current?.requestFullscreen === 'function') {
            setSupportFullscreen(true)
        }
    }, [])

    // useEffect(() => {
    //     if (isReady) {
    //         setInterval(() => {
    //             setCurrentTime(playerRef.current?.getCurrentTime() || 0)
    //         }, 1000)
    //     }
    // }, [isReady, setCurrentTime])

    useEffect(() => {
        if (!preventProgressUpdate.current) {
            setProgress((currentTime / totalTime) * 100 || 0)
        }
    }, [currentTime, totalTime])

    const handleTogglePlay = useCallback(() => {
        if (isPlaying) {
            playerRef.current?.pauseVideo()
        } else {
            playerRef.current?.playVideo()
        }
    }, [isPlaying])

    const handleToggleMute = useCallback(() => {
        if (isMuted) {
            playerRef.current?.unMute()
            setIsMuted(false)
        } else {
            playerRef.current?.mute()
            setIsMuted(true)
        }
    }, [isMuted])

    const handleOnProgressChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const value = Number(event.target.value)
        setProgress(value)

        preventProgressUpdate.current = true

        const newTime = (value * totalTime) / 100
        playerRef.current?.seekTo(newTime, true)
    }, [totalTime])

    const handleFullscreen = useCallback(() => {
        playerRef.current?.playVideo()
        iframeRef.current?.requestFullscreen.bind(iframeRef.current)()
    }, [])

    const handleOnMouseEnter = useCallback(() => {
        setShowControls(true)
        clearTimeout(mouseLeavetimeout.current as number)

        mouseLeavetimeout.current = null
    }, [])

    const handleOnMouseLeave = useCallback(() => {
        mouseLeavetimeout.current = setTimeout(() => {
            setShowControls(false)
        }, 300) as unknown as number
    }, [])

    const getCurrentTime = useCallback(() => {
        return `${Math.floor(currentTime / 60)}:${("0" + Math.floor(currentTime % 60)).slice(-2)}`
    }, [currentTime])

    const getTotalTime = useCallback(() => {
        return `${Math.floor(totalTime / 60)}:${("0" + Math.floor(totalTime % 60)).slice(-2)}`
    }, [totalTime])

    const videoSrc = YoutubeProvider.getVideoSrc(videoId)

    return (
        <Styled.Wrapper
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {
                videoSrc ? (
                    <iframe
                        ref={iframeRef}
                        id={`youtube-player-id-${id.current}`}
                        width={'720'}
                        height={'405'}
                        src={videoSrc}
                        allowFullScreen={true}
                        frameBorder={'0'}
                    />
                ) : (
                    null
                )
            }

            <Styled.ControlsWrapper $hide={!showControls}>
                <Styled.PlayButton
                    $isPlaying={isPlaying}
                    onClick={handleTogglePlay}
                />

                <Styled.TimeControlsWrapper>
                    <Styled.CurrentTime>
                        {getCurrentTime()}
                    </Styled.CurrentTime>

                    <Styled.ProgressBar
                        min={0}
                        max={100}
                        value={progress}
                        onChange={handleOnProgressChange}
                    />

                    <Styled.TotalTime>
                        {getTotalTime()}
                    </Styled.TotalTime>
                </Styled.TimeControlsWrapper>

                <Styled.MuteButton
                    $isMuted={isMuted}
                    onClick={handleToggleMute}
                />

                {
                    supportFullscreen ? (
                        <Styled.FullscreenButton onClick={handleFullscreen}/>
                    ) : (
                        null
                    )
                }
            </Styled.ControlsWrapper>
        </Styled.Wrapper>
    )
}

export default Video