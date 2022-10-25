import YoutubeProvider from './providers/YouTube'

import type {
    ReactNode,
    FC
} from 'react'

export type VideoProps = {
    src: string,
    children: ReactNode,
    id?: string | number
    width?: string | number,
    height?: string | number,
    onReady?: () => void,
    onEvent?: (event: any) => void
}

export type VideoComponent = FC<VideoProps>

export type VideoComponentType = VideoComponent & {
    Providers: {
        YouTube: typeof YoutubeProvider
    }
}