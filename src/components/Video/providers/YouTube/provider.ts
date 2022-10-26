import environment from '@utils/environment'

const TAG_ID = 'fluffy-video-youtube-iframe-api'
const TAG_SRC = 'https://www.youtube.com/iframe_api'

let API_READY_RESOLVER = () => {}

const API_READY = new Promise(resolve => {
    //@ts-ignore
    API_READY_RESOLVER = resolve
})

const onYouTubeAPIReady = () => {
    return new Promise(resolve => {
        if (environment.isClient) {
            //@ts-ignore
            if (typeof window.onYouTubeIframeAPIReady !== 'function') {
                API_READY.then(() => resolve(true))

                //@ts-ignore
                window.onYouTubeIframeAPIReady = () => API_READY_RESOLVER()
            } else {
                API_READY.then(() => resolve(true))
            }
        } else {
            resolve(true)
        }
    })
}

const initiate = () => {
    if (environment.isClient) {
        const youTubeApiScriptTag = document.getElementById(TAG_ID)

        if (!youTubeApiScriptTag) {
            const tag = document.createElement('script')
            
            tag.id = TAG_ID
            tag.src = TAG_SRC
            tag.async = true
            tag.defer = true
    
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)
        }
    }
}

const getVideoId = (url?: string) => {
    if (url) {
        // eslint-disable-next-line no-useless-escape
        return url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)?.[2]
    }
}

const getVideoSrc = (id?: string) => {
    if (id) {
        return `https://www.youtube.com/embed/${id}?&enablejsapi=1`
    } else {
        return null
    }
}

const Youtube = {
    initiate: initiate,
    onReady: onYouTubeAPIReady,
    getVideoId: getVideoId,
    getVideoSrc: getVideoSrc
}

export default Youtube