import { useEffect } from 'react'

import useDeepCompareMemoize from '@hooks/useDeepCompareMemoize'

import type * as Types from './types'

const useDeepCompareEffect: Types.UseDeepCompareEffect = (callback, dependencies) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        callback,
        dependencies.map(useDeepCompareMemoize)
    )
}

export default useDeepCompareEffect