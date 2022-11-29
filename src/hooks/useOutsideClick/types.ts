import type { MouseEvent, TouchEvent,  RefObject } from 'react'

type Handler = (
    event: MouseEvent<Element, MouseEvent>
    | TouchEvent<Element>
    | BeforeUnloadEvent
) => void

type UseOutsideClick<T extends HTMLElement = HTMLElement> = (
    target: RefObject<T>,
    handler: Handler
) => void

export type {
    UseOutsideClick,
    Handler
}
