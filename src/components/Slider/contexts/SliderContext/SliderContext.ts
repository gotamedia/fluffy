import { createContext } from 'react'

import type * as Types from './types'

const SliderContextDefaultValue = {} as Types.SliderContext

const SliderContext = createContext(SliderContextDefaultValue)

export {
    SliderContext
}