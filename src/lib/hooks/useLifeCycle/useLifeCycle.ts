import { useEffect, useState } from 'react'

import useLazyRef from '@hooks/useLazyRef'

import type * as Types from './types'

const useLifeCycle: Types.UseLifeCycle = (props) => {
    const willMountCallbackRef = useLazyRef<Types.UseLifeCycleProps['willMount']>(() => props?.willMount)
    const didMountCallbackRef = useLazyRef<Types.UseLifeCycleProps['didMount']>(() => props?.didMount)
    const willUnmountCallbackRef = useLazyRef<Types.UseLifeCycleProps['willUnmount']>(() => props?.willUnmount)

    const [isMounted, isMountedSet] = useState(false)

    // Mimic componentWillMount in a class component
    // This hook will run 'willMount()' only once before the first render
    useEffect(() => {
        if (typeof willMountCallbackRef.current === 'function') {
            willMountCallbackRef.current()
        }
    }, [willMountCallbackRef])

    useEffect(() => {
        isMountedSet(true)
    }, [])

    // Mimic componentDidMount in a class component
    // This hook will run 'didMount()' only once after the first render
    useEffect(() => {
        const willUnmountcallback = willUnmountCallbackRef.current

        if (isMounted && typeof didMountCallbackRef.current === 'function') {
            didMountCallbackRef.current()
        }

        return () => {
            if (typeof willUnmountcallback === 'function') {
                willUnmountcallback()
            }
        }
    }, [isMounted, didMountCallbackRef, willUnmountCallbackRef])

    // Mimic componentWillUnmount in a class component
    // This hook will run 'willUnmount()' only once when unmount
    useEffect(() => {
        const willUnmountcallback = willUnmountCallbackRef.current

        return () => {
            if (typeof willUnmountcallback === 'function') {
                willUnmountcallback()
            }
        }
    }, [willUnmountCallbackRef])
}

export default useLifeCycle