interface ExtendedHTMLElement extends HTMLElement {
    webkitRequestFullscreen?: any,
    webkitRequestFullScreen?: any,
    mozRequestFullScreen?: any,
    msRequestFullscreen?: any
}

interface ExtendedDocument extends Document {
    webkitExitFullscreen?: any,
    msExitFullscreen?: any,
    webkitCancelFullScreen?: any,
    mozCancelFullScreen?: any,
    webkitFullscreenElement?: any,
    webkitCurrentFullScreenElement?: any,
    mozFullScreenElement?: any,
    msFullscreenElement?: any,
    webkitFullscreenEnabled?: any,
    mozFullScreenEnabled?: any,
    msFullscreenEnabled?: any
}

const METHODS = {
    OPEN: [
        'requestFullscreen',
        'webkitRequestFullscreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
    ],
    CLOSE: [
        'exitFullscreen',
        'webkitExitFullscreen',
        'msExitFullscreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen'
    ],
    ACTIVE_ELEMENT: [
        'fullscreenElement',
        'webkitFullscreenElement',
        'webkitCurrentFullScreenElement',
        'mozFullScreenElement',
        'msFullscreenElement'
    ],
    SUPPORTED: [
        'webkitFullscreenEnabled',
        'webkitCancelFullScreen',
        'mozFullScreenEnabled',
        'msFullscreenEnabled'
    ],
    LISTENERS: [
        'fullscreenchange',
        'webkitfullscreenchange',
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'MSFullscreenChange'
    ]
}

class Fullscreen {
    open(element: ExtendedHTMLElement): void {
        if (element) {
            for (const callbackName of METHODS.OPEN) {
                //@ts-ignore
                if (element[callbackName]) {
                    //@ts-ignore
                    element[callbackName]()
                    break
                }
            }
        }
    }

    close(): void {
        const _doc = window.document as ExtendedDocument

        if (this.isFullscreen()) {
            for (const callbackName of METHODS.CLOSE) {
                //@ts-ignore
                if (_doc[callbackName]) {
                    //@ts-ignore
                    _doc[callbackName]()
                    break
                }
            }
        }
    }

    isFullscreen() {
        const _doc = window.document as ExtendedDocument

        for (const callbackName of METHODS.ACTIVE_ELEMENT) {
            //@ts-ignore
            if (_doc[callbackName]) {
                //@ts-ignore
                return _doc[callbackName]
            }
        }
    }

    isSupported(): boolean {
        let isSupported = false

        const _doc = window.document as ExtendedDocument

        for (const callbackName of METHODS.SUPPORTED) {
            //@ts-ignore
            if (_doc[callbackName]) {
                //@ts-ignore
                 isSupported = _doc[callbackName]
                 break
            }
        }

        return isSupported
    }

    addListener(callback: () => void) {
        for (const callbackName of METHODS.LISTENERS) {
            window.addEventListener(callbackName, callback)
        }
    }

    removeListener(callback: () => void) {
        for (const callbackName of METHODS.LISTENERS) {
            window.removeEventListener(callbackName, callback)
        }
    }
}

export default Fullscreen