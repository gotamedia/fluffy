import type { RefObject } from 'react'

import type { EventHandler, MouseEvent, TouchEvent } from 'react'

type Handler<E> = (event: E) => void

type UseEventListenerProps<
    Window extends keyof WindowEventMap,
    Element extends keyof HTMLElementEventMap,
    Media extends keyof MediaQueryListEventMap,
    Document extends keyof DocumentEventMap,
    T extends Element | MediaQueryList | void = void
> = (
    eventName: Window | Element | Media,
    handler:  Handler<WindowEventMap[Window]>
        | Handler<HTMLElementEventMap[Element]>
        | Handler<MediaQueryListEventMap[Media]>
        | Handler<DocumentEventMap[Document]>
        | Handler<Event>
        | Handler<TouchEvent>
        | Handler<MouseEvent>
        | EventHandler<MouseEvent>,
    element?: RefObject<T>,
    options?: boolean | AddEventListenerOptions
) => void

export type { UseEventListenerProps }
