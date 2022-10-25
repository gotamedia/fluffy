export type VideoContext = {
    id: string | number,
    src: string,
    onReady: () => void,
    onEvent: (event: any) => void,
    width?: number | string,
    height?: number | string
}