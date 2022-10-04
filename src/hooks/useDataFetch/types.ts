import type { DependencyList } from 'react'

export type UseDataFetch = (
    effect: (options?: any) => Promise<any>,
    dependencies: DependencyList,
    id?: string
) => void