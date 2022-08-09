import { createContext } from 'react'

import type * as Types from './types'

const MenuContext = createContext<Types.MenuContext>(null)

export default MenuContext