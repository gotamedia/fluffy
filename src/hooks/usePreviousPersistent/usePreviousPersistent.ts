import deepCompareEquals from '@utils/deepCompareEquals'

import useLazyRef from '@hooks/useLazyRef'

import type * as Types from './types'

const usePreviousPersistent: Types.UsePreviousPersistent = (value, isEqual = deepCompareEquals) => {
    const ref = useLazyRef(() => {
        return {
            value: value,
            prev: value
        }
    })

    let _update = false
    const current = ref.current?.value as typeof value

    if (typeof isEqual === 'function') {
        if (!isEqual(value, current)) {
            _update = true
        }
    } else {
        if (value !== current) {
            _update = true
        }
    }

    if (_update) {
        ref.current = {
            value: value,
            prev: current as typeof value
        }
    }


    return ref.current?.prev as typeof value
}

export default usePreviousPersistent
