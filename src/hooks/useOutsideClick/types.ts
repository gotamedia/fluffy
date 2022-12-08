export type UseOutsideClick<T extends HTMLElement = HTMLElement> = (
    target: T | null | undefined,
    handler: (event: MouseEvent | TouchEvent) => void
) => void