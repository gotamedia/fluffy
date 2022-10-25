import BaseComponent from './Video'

import YouTubeProvider from './providers/YouTube'

import type { VideoComponentType } from './types'

export * from './types'

const Video = BaseComponent as VideoComponentType

Video.Providers = {
    YouTube: YouTubeProvider
}

Video.Providers.YouTube.displayName = 'Video.Providers.YouTube'

export default Video