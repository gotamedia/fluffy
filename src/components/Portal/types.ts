import {
    ReactNode,
    FC
} from 'react'

export type PortalProps = {
    dom?: Element | DocumentFragment,
    portalWhenMounted?: boolean,
    children: ReactNode
}

export type PortalComponent = FC<PortalProps>