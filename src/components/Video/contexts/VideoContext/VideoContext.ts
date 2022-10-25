import { createContext } from 'react'

import type * as Types from './types'

const VideoContextDefaultValue = {} as Types.VideoContext

const VideoContext = createContext(VideoContextDefaultValue)

export {
    VideoContext
}