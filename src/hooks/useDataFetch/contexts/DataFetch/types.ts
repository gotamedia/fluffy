import type { FC, ReactNode } from 'react'

export type DataFetchRequest = {
    id: string,
    promise: (options?: any) => Promise<unknown>,
    cancel: (value?: any) => void,
    data: any
}

export type DataFetchContextType = {
    requests: DataFetchRequest[],
    allResolved: boolean
}

export type DataFetchContextProvider = FC<{ children: ReactNode }>