/* eslint-disable no-undef */
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef } from 'react'
import * as Types from './types'

const useEventListener: Types.UseEventListenerProps<
    keyof WindowEventMap,
    keyof HTMLElementEventMap,
    keyof MediaQueryListEventMap,
    keyof DocumentEventMap,
    HTMLElement | MediaQueryList | void
> = (
    eventName,
    handler,
    element,
    options
) => {
    const savedHandler = useRef(handler)

    useIsomorphicLayoutEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const targetElement = element?.current ?? window

        if (!(targetElement && targetElement.addEventListener)) return

        const listener: typeof handler = (event) => savedHandler.current(event)

        targetElement.addEventListener(eventName, listener, options)

        return () => {
            targetElement.removeEventListener(eventName, listener, options)
        }
    }, [eventName, element, options])
}

export default useEventListener
