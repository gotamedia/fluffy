import type { DependencyList } from 'react'

export type UseAsyncEffect = (
    effect: () => Promise<unknown>,
    dependencies: DependencyList
) => void