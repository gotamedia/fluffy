export type UseMeasureRect = Omit<DOMRectReadOnly, 'toJSON'>

export type UseMeasure = (target: HTMLElement | null) => UseMeasureRect