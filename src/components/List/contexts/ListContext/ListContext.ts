import { createContext } from 'react'

import type * as Types from './types'

const defaultListContext = {
    _domRef: null
}

const ListContext = createContext<Types.ListContext>(defaultListContext)

export default ListContext