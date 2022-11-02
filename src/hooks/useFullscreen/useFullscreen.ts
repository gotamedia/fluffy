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
            fullscreen.current?.open(element)
            setIsFullscreen(true)
        }
    }, [fullscreen, element])

    const close = useCallback(() => {
        fullscreen.current?.close()
        setIsFullscreen(false)
    }, [fullscreen])

    useEffect(() => {
        const onFullscreenChange = () => {
            if (!fullscreen.current?.isFullscreen()) {
                close()
            }
        }

        window.addEventListener('fullscreenchange', onFullscreenChange)

        return () => {
            window.removeEventListener('fullscreenchange', onFullscreenChange)
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
        isEnabled: fullscreen.current?.enabled()
    }
}

export default useFullscreen