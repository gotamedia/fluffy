import { createContext } from 'react'

import wait, { WaitTypes } from '@utils/wait'

import type * as Types from './types'

const defaultContextValue: Types.DataFetchContextType = {
    requests: [],
    allResolved: false
}

const DataFetchContext = createContext<Types.DataFetchContextType>(defaultContextValue)

const createServerContext = () => {
    const dataFetchContext: Types.DataFetchContextType = {
        requests: [],
        allResolved: false
    }

    const Provider: Types.DataFetchContextProvider = ({ children }) => {
        return (
            <DataFetchContext.Provider value={dataFetchContext}>
                {children}
            </DataFetchContext.Provider>
        )
    }

    const _cleanUp = (request: Types.DataFetchRequest) => {
        dataFetchContext.requests = dataFetchContext.requests.filter(item => item.id !== request.id)
    }

    const resolveData = async (timeout = 1500, options?: any) => {
        if (timeout) {
            const timeoutPromise = wait(timeout, WaitTypes.Reject)

            const effects = dataFetchContext.requests.map((effect) => {
                return Promise
                .race([effect.promise(options), timeoutPromise])
                .catch(() => effect.cancel())
                .finally(() => _cleanUp(effect))
            })

            await Promise.all(effects)
        } else {
            const effects = dataFetchContext.requests.map((effect) => {
                return effect
                    .promise(options)
                    .finally(() => _cleanUp(effect))
            })

            await Promise.all(effects)
        }
        
        dataFetchContext.allResolved = true
    }

    return {
        Provider,
        resolveData,
        requests: dataFetchContext.requests
    }
}

export {
    DataFetchContext,
    createServerContext
}