export type UseMeasureRect = Omit<DOMRectReadOnly, 'toJSON'>

export type UseMeasure = (target: HTMLElement | null) => {
    rect: UseMeasureRect,
    revalidate: () => void
}