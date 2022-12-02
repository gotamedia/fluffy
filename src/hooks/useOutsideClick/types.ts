import type { EventHandler, MouseEvent, TouchEvent } from 'react'

type Handler = EventHandler<MouseEvent | TouchEvent>

type UseOutsideClick<T extends HTMLElement = HTMLElement> = (
    target: T | null | undefined,
    handler: Handler
) => void

export type {
    UseOutsideClick,
    Handler
}
