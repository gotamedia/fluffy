import { RefObject } from 'react'

export type ListContext = {
    _domRef: RefObject<HTMLElement> | null
}