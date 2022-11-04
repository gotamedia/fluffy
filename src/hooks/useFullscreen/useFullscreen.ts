import {
    useState,
    useCallback,
    useEffect
} from 'react'

import useLazyRef from '@hooks/useLazyRef'
import usePreviousPersistent from '@hooks/usePreviousPersistent'

import Fullscreen from '@utils/Fullscreen'

const useFullscreen = (element: HTMLElement | null) => {
    const fullscreen = useLazyRef<Fullscreen>(() => new Fullscreen())

    const [isFullscreen, setIsFullscreen] = useState(false)

    const previousIsFullscreen = usePreviousPersistent(isFullscreen, undefined)

    const open = useCallback(() => {
        if (element) {
            if (fullscreen.current?.isSupported()) {
                fullscreen.current?.open(element)
            }

            setIsFullscreen(true)
        }
    }, [fullscreen, element])

    const close = useCallback(() => {
        if (fullscreen.current?.isSupported()) {
            fullscreen.current?.close()
        }
        
        setIsFullscreen(false)
    }, [fullscreen])

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
        isSupported: fullscreen.current?.isSupported() || false
    }
}

export default useFullscreen