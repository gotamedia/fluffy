import type {
    EffectCallback,
    DependencyList
} from 'react'

export type UseDeepCompareEffect = (callback: EffectCallback, dependencies: DependencyList) => void