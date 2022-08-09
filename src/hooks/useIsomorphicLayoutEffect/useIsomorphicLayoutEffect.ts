import {
    useEffect,
    useLayoutEffect
} from 'react'

import environment from '@utils/environment'

const useIsomorphicLayoutEffect = environment.isClient ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect