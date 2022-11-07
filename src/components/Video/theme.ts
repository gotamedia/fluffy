import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { VideoProps } from './types'

export type VideoThemeType = ComponentTheme<{
    defaultProps: Partial<VideoProps>,
    style: {
        native: ThemeStyleItem,
        youtube: ThemeStyleItem,
        showheros: ThemeStyleItem
    }
}>

const VideoTheme: VideoThemeType = {
    defaultProps: {
        
    },
    style: {
        native: {},
        youtube: {},
        showheros: {}
    }
}

export default VideoTheme