type UseDidValueChanged = <T = unknown>(
    state?: T,
    isEqual?: (prevValue?: T, value?: T) => boolean
) => boolean


export type { UseDidValueChanged }
