import type { DependencyList } from 'react'

export type UseServerEffect = <
    Type extends (...args: any[]) => any
>(callback: Type, deps?: DependencyList) => void