import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef } from 'react'

const useEventListener = <
    KW extends keyof WindowEventMap,
    KH extends keyof HTMLElementEventMap,
    KM extends keyof MediaQueryListEventMap,
    T extends HTMLElement | MediaQueryList | null
>(
    eventName: KW | KH | KM,
    handler: (
        event:
            T extends HTMLElement ? (
                HTMLElementEventMap[KH]
            ) : (
                T extends MediaQueryList ? (
                    MediaQueryListEventMap[KM]
                ) : (
                    WindowEventMap[KW]
                )
            )
    ) => void,
    target?: T,
    options?: boolean | AddEventListenerOptions
) => {
    const savedHandler = useRef(handler)

    useIsomorphicLayoutEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const targetElement = target ?? window

        const listener = savedHandler.current as (event: Event) => void

        if (!targetElement?.addEventListener) return

        targetElement.addEventListener(eventName, listener, options)

        return () => {
            targetElement.removeEventListener(eventName, listener, options)
        }
    }, [eventName, target, options])
}

export default useEventListener