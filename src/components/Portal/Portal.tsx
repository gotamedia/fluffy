import { createPortal } from 'react-dom'

import useMounted from '@hooks/useMounted'

import type * as Types from './types'
import { useCallback } from 'react'

const Portal: Types.PortalComponent = (props) => {
    const {
        dom,
        portalWhenMounted = true,
        children
    } = props

    const mounted = useMounted()

    const content = useCallback(() => {
        return createPortal(children, dom || document.body)
    }, [children, dom])

    return (
        portalWhenMounted ? (
            mounted ? (
                content()
            ) : (
                null
            )
        ) : (
            content()
        )
    )
}

export default Portal