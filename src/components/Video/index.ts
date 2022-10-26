import BaseComponent from './Video'

import NativeProvider from './providers/Native'
import YouTubeProvider from './providers/YouTube'

import type { VideoComponentType } from './types'

export * from './types'

const Video = BaseComponent as VideoComponentType

Video.Providers = {
    Native: NativeProvider,
    YouTube: YouTubeProvider
}

Video.Providers.Native.displayName = 'Video.Providers.Native'
Video.Providers.YouTube.displayName = 'Video.Providers.YouTube'

export default Video