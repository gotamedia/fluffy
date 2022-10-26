import BaseComponent from './Video'

import NativeProvider from './providers/Native'
import YouTubeProvider from './providers/YouTube'
import ShowHerosProvider from './providers/ShowHeros'

import type { VideoComponentType } from './types'

export * from './types'

const Video = BaseComponent as VideoComponentType

Video.Providers = {
    Native: NativeProvider,
    YouTube: YouTubeProvider,
    ShowHeros: ShowHerosProvider
}

Video.Providers.Native.displayName = 'Video.Providers.Native'
Video.Providers.YouTube.displayName = 'Video.Providers.YouTube'
Video.Providers.ShowHeros.displayName = 'Video.Providers.ShowHeros'

export default Video