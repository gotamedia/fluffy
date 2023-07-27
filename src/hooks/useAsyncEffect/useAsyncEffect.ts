import { useEffect } from 'react'

import type { EffectCallback } from 'react'
import type * as Types from './types'

const useAsyncEffect: Types.UseAsyncEffect = (effect, dependencies) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect((() => {
        effect()
    }) as unknown as EffectCallback, dependencies)
}

export default useAsyncEffect