import type { EffectCallback } from 'react'

export type UseDeepCompareEffect = <Type = unknown>(callback: EffectCallback, dependencies: ReadonlyArray<Type>) => void