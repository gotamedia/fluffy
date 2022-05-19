export type UseDeepCompairCallback = <
    Type extends (...args: unknown[]) => unknown,
    DepsType = unknown
>(callback: Type, dependencies: ReadonlyArray<DepsType>) => void