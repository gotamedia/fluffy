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

        if (!targetElement?.addEventListener) return

        targetElement.addEventListener(eventName, handler as any, options)

        return () => {
            targetElement.removeEventListener(eventName, handler as any, options)
        }
    }, [handler, eventName, target, options])
}

export default useEventListener