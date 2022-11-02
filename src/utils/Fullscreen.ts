interface ExtendedHTMLElement extends HTMLElement {
    webkitRequestFullscreen?: any,
    mozRequestFullscreen?: any,
    msRequestFullscreen?: any
}

interface ExtendedDocument extends Document {
    webkitExitFullscreen?: any,
    mozCancelFullscreen?: any,
    msExitFullscreen?: any,
    webkitFullscreenEnabled?: any,
    mozFullscreenEnabled?: any,
    msFullscreenEnabled?: any,
    mozFullscreenElement?: any,
    webkitFullscreenElement?: any,
    msFullscreenElement?: any
}

class Fullscreen {
    open(element: ExtendedHTMLElement): void {
        if (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen()
            } else if (element.mozRequestFullscreen) {
                element.mozRequestFullscreen()
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen()
            }
        }
    }

    close(): void {
        const doc = window.document as ExtendedDocument

        if (doc.fullscreenElement) {
            if (doc.exitFullscreen) {
                doc.exitFullscreen()
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen()
            } else if (doc.mozCancelFullscreen) {
                doc.mozCancelFullscreen()
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen()
            }
        }
    }

    isFullscreen(): boolean {
        const doc = window.document as ExtendedDocument

        return (
            doc.fullscreenElement ||
            doc.mozFullscreenElement ||
            doc.webkitFullscreenElement ||
            doc.msFullscreenElement
        )
    }

    enabled(): boolean {
        const _doc = window.document as ExtendedDocument

        return (
            _doc.fullscreenEnabled ||
            _doc.webkitFullscreenEnabled ||
            _doc.mozFullscreenEnabled ||
            _doc.msFullscreenEnabled
        )
    }
}

export default Fullscreen