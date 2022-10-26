import NativeProvider from './providers/Native'
import YoutubeProvider from './providers/YouTube'
import ShowHerosProvider from './providers/ShowHeros'

import type {
    ReactNode,
    FC
} from 'react'

export type VideoProps = {
    children: ReactNode,
    src?: string,
    id?: string | number
    width?: string | number,
    height?: string | number,
    config?: Record<string, any>,
    onReady?: () => void,
    onEvent?: (event: any) => void
}

export type VideoComponent = FC<VideoProps>

export type VideoComponentType = VideoComponent & {
    Providers: {
        Native: typeof NativeProvider,
        YouTube: typeof YoutubeProvider,
        ShowHeros: typeof ShowHerosProvider
    }
}