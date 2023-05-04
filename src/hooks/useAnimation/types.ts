type HeightTransitionCallback = ({ element, from, to }: {
    element: HTMLElement,
    from: number,
    to: number,
    onComplete?: () => void
}) => void

export { HeightTransitionCallback }
