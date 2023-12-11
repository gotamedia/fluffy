import { createContext } from 'react'

import wait, { WaitTypes } from '@utils/wait'

import type * as Types from './types'

const DataFetchContext = createContext<Types.DataFetchContextType>(null)

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

    const _updatePromiseWithData = (id: string, value: any) => {
        dataFetchContext.requests = dataFetchContext.requests.map(request => {
            if (request.id === id) {
                return {
                    ...request,
                    data: value
                }
            } else {
                return request
            }
        })
    }

    const resolveData = async (timeout = 1500, options?: any) => {
        const effects = dataFetchContext.requests.map((effect) => {
            if (timeout) {
                return Promise
                    .race([
                        effect.promise(options),
                        wait(timeout, WaitTypes.Reject)
                    ])
                    .then(data => {
                        _updatePromiseWithData(effect.id, data)
                        return data
                    })
                    .catch(error => {
                        _updatePromiseWithData(effect.id, error)
                        effect.cancel(error)
                    })
            } else {
                return effect
                    .promise(options)
                    .then(data => {
                        _updatePromiseWithData(effect.id, data)
                        return data
                    })
            }
        })

        await Promise.all(effects)

        dataFetchContext.allResolved = true
    }

    const getRequests = () => {
        return dataFetchContext.requests
    }

    return {
        Provider,
        resolveData,
        getRequests: getRequests
    }
}

export {
    DataFetchContext,
    createServerContext
}