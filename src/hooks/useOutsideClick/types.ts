import { RefObject } from 'react'

export type UseOutsideClick = (
    target: RefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void
) => void