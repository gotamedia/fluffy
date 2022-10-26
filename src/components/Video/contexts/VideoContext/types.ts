export type VideoContext = {
    id: string | number,
    onReady: () => void,
    onEvent: (event: any) => void,
    src?: string,
    config?: Record<string, any>,
    width?: number | string,
    height?: number | string
}