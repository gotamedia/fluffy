import { useCallback } from 'react'

import useDeepCompareMemoize from '@hooks/useDeepCompareMemoize'

import type * as Types from './types'

const useDeepCompareCallback: Types.UseDeepCompairCallback = (callback, dependencies) => (
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(
        callback,
        dependencies.map(useDeepCompareMemoize)
    )
)

export default useDeepCompareCallback
