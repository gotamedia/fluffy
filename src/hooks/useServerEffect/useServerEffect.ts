import { useRef } from 'react'
import isEqual from 'lodash/isEqual'

import environment from '@utils/environment'

import type * as Types from './types'

const useServerEffect: Types.UseServerEffect = (callback, dependencies) => {
    const mounted = useRef(false)
    const prevDeps = useRef(dependencies)

    if (!mounted.current) {
        mounted.current = true
        
        callback()
    }

    if (environment.isServer) {
        if (dependencies === undefined || !isEqual(prevDeps.current, dependencies)) {
            prevDeps.current = dependencies

            callback()
        }
    }
}

export default useServerEffect