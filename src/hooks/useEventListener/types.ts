/* eslint-disable no-undef */
import type { RefObject } from 'react'

type UseEventListenerProps<
    Window extends keyof WindowEventMap,
    Element extends keyof HTMLElementEventMap,
    Media extends keyof MediaQueryListEventMap,
    Document extends keyof DocumentEventMap,
    T extends HTMLElement | MediaQueryList | void = void
> = (
    eventName: Window | Element | Media,
    handler: (
        event: WindowEventMap[Window]
        | HTMLElementEventMap[Element]
        | MediaQueryListEventMap[Media]
        | DocumentEventMap[Document]
        | Event
    ) => void,
    element?: RefObject<T>,
    options?: boolean | AddEventListenerOptions
) => void

export type { UseEventListenerProps }
