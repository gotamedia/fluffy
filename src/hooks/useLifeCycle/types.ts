export type UseLifeCycleProps<PropsType = {}> = PropsType & {
    willMount?: () => void,
    didMount?: () => void,
    willUnmount?: () => void
}

export type UseLifeCycle = <PropsType = Record<string, unknown>>(props: UseLifeCycleProps<PropsType>) => void