import { useContext } from 'react'

import { v4 as createId } from 'uuid'

import useLazyRef from '@hooks/useLazyRef'
import useAsyncEffect from '@hooks/useAsyncEffect'

import { DataFetchContext } from './contexts/DataFetch'

import type * as Types from './types'

const useDataFetch: Types.UseDataFetch = (effect, dependencies, id) => {
    const fetchId = useLazyRef(() => `${id ? `${id}__` : '' }${createId()}`)

    const dataFetchContext = useContext(DataFetchContext)

    // Server-Side fetching
    if (dataFetchContext && !dataFetchContext.allResolved) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let cancel = (value?: any) => {}

        const effectPromise = (options: any) => {
            return new Promise((resolve) => {
                cancel = resolve
                
                let resolved = false

                effect(options)
                    .then(value => {
                        resolved = true
                        resolve(value)
                        return value
                    })
                    .finally(() => {
                        if (!resolved) {
                            resolve(undefined)
                        }
                    })
            })
        }

        dataFetchContext.requests.push({
            id: fetchId.current!,
            promise: effectPromise,
            cancel: cancel,
            data: undefined
        })
    }

    // Client-Side fetching
    useAsyncEffect(effect, dependencies)
}

export default useDataFetch