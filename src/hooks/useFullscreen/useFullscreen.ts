import {
    useRef,
    useState,
    useCallback,
    useEffect
} from 'react'

import useLazyRef from '@hooks/useLazyRef'
import usePreviousPersistent from '@hooks/usePreviousPersistent'

import Fullscreen from '@utils/Fullscreen'

const useFullscreen = (element: HTMLElement | null) => {
    const prevRect = useRef({
        width: '',
        height: ''
    })
    const fullscreen = useLazyRef<Fullscreen>(() => new Fullscreen())

    const [isFullscreen, setIsFullscreen] = useState(false)

    const previousIsFullscreen = usePreviousPersistent(isFullscreen, undefined)

    const open = useCallback(() => {
        if (element) {
            if (fullscreen.current?.isSupported()) {
                fullscreen.current?.open(element)
            } else {
                prevRect.current = {
                    width: element.style.width,
                    height: element.style.height
                }

                element.style.position = 'fixed'
                element.style.inset = '0'
                element.style.width = '100%'
                element.style.height = '100%'
            }

            setIsFullscreen(true)
        }
    }, [fullscreen, element])

    const close = useCallback(() => {
        if (fullscreen.current?.isSupported()) {
            fullscreen.current?.close()
        } else {
            if (element) {
                element.style.position = 'relative'
                element.style.inset = 'unset'
                element.style.width = prevRect?.current.width || 'unset'
                element.style.height = prevRect?.current.height || 'unset'
            }
        }

        setIsFullscreen(false)
    }, [fullscreen, element])

    useEffect(() => {
        const fullscreenInstance = fullscreen.current

        const onFullscreenChange = () => {
            if (!fullscreen.current?.isFullscreen()) {
                close()
            }
        }

        fullscreenInstance?.addListener(onFullscreenChange)

        return () => {
            fullscreenInstance?.removeListener(onFullscreenChange)
        }
    }, [
        close,
        element,
        fullscreen,
        isFullscreen,
        previousIsFullscreen
    ])

    return {
        open,
        close,
        isFullscreen: isFullscreen,
        isSupported: fullscreen.current?.isSupported()
    }
}

export default useFullscreen