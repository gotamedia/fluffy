import type { DependencyList } from 'react'

export type UseDeepCompairCallback = <
    Type extends (...args: any[]) => any
>(callback: Type, deps: DependencyList) => Type