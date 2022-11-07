import {
    forwardRef,
    useState,
    useImperativeHandle,
    useEffect
} from 'react'

import classNames from '@utils/classNames'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import useVideo from '../../hooks/useVideo'

import Provider from './provider'

import * as Styled from './style'
import type * as Types from './types'

const ShowHerosProvider: Types.ShowHerosProvider = forwardRef((props, ref) => {
    const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null)
    const [isReady, setIsReady] = useState(false)

    const {
        src,
        config,
        width,
        height,
        onReady,
        onEvent
    } = useVideo()

    useImperativeHandle(ref, () => {
        return {
            _domRef: wrapperRef
        }
    }, [wrapperRef])

    useIsomorphicLayoutEffect(() => {
        if (wrapperRef) {
            let playerScript = null
    
            if (src) {
                playerScript = Provider.initiateBySrc(src, config)
            } else if (config?.script) {
                playerScript = Provider.initiateByScript(config)
            }
    
            if (playerScript) {
                wrapperRef.innerHTML = ''
                wrapperRef.appendChild(playerScript)

                setIsReady(true)
            }
        }
    }, [config, src, wrapperRef])

    useEffect(() => {
        if (isReady) {
            onReady()
        }
    }, [isReady, onReady])

    useEffect(() => {
        if (config?.eventId) {
            const handleMessage = (event: any) => {    
                if (event?.data?.event_id === config.eventId) {
                    onEvent(event.data)
                }
            }
    
            window.addEventListener('message', handleMessage)
    
            return () => {
                window.removeEventListener('message', handleMessage)
            }
        }
    }, [config?.eventId, onEvent])

    const wrapperClassName = classNames({
        'fluffy-video-showheros': true,
        [props.className || '']: true
    })

    const style = {
        width: width,
        height: height
    }

    return (
        <Styled.Wrapper
            style={style}
            {...props}
            className={wrapperClassName}
            ref={setWrapperRef}
        />
    )
})

export default ShowHerosProvider