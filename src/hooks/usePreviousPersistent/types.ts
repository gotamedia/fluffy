export type UsePreviousPersistent = <T = unknown>(
    state: T,
    isEqual?: (value1: T, value2: T) => boolean
) => T
