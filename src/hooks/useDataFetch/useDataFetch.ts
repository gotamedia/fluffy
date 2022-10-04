import {
    useEffect,
    useContext
} from 'react'

import { v4 as createId } from 'uuid'

import useLazyRef from '@hooks/useLazyRef'

import { DataFetchContext } from './contexts/DataFetch'

import type * as Types from './types'

const useDataFetch: Types.UseDataFetch = (effect, dependencies, id) => {
    const fetchId = useLazyRef(() => `${id ? `${id}__` : '' }${createId()}`)

    const dataFetchContext = useContext(DataFetchContext)

    // Server-Side fetching
    if (dataFetchContext && !dataFetchContext.allResolved) {
        let cancel = () => {}

        const effectPromise = (options: any) => {
            return new Promise((resolve) => {
                cancel = () => resolve(undefined)

                effect(options).finally(() => resolve(undefined))
            })
        }

        dataFetchContext.requests.push({
            id: fetchId.current!,
            promise: effectPromise,
            cancel: cancel
        })
    }

    // Client-Side fetching
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect as unknown as () => () => void, dependencies)
}

export default useDataFetch