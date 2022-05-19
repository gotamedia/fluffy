import { useRef } from 'react'

import { isClient } from '@utils/environment'
import deepCompareEquals from '@utils/deepCompareEquals'

const useDeepCompareMemoize = <Type = unknown>(value: Type) => {
    const ref = useRef<Type>()

    if (isClient) {
        if (!deepCompareEquals(value, ref.current)) {
            ref.current = value
        }
    }

    return ref.current
}

export default useDeepCompareMemoize
