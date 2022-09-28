import {
    forwardRef,
    useState,
    useImperativeHandle,
    useEffect
} from 'react'

import useAnchor from '@hooks/useAnchor'

import FocusTrap from '@components/FocusTrap'

import * as Types from './types'

const Anchor: Types.AnchorComponent = forwardRef((props, ref) => {
    const {
        anchor,
        padding,
        offset,
        children,
        style,
        forceDirection,
        withFocusTrap,
        preventScrollOutside = true,
        ...DOMProps
    } = props

    const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => contentElement as HTMLDivElement, [contentElement])

    useEffect(() => {
        if (preventScrollOutside) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [preventScrollOutside])

    const anchorRect = useAnchor({
        anchor: anchor,
        anchored: contentElement,
        padding: padding,
        offset: offset,
        forceDirection: forceDirection
    })
    
    const Content = withFocusTrap ? FocusTrap : 'div'

    return (
        <Content
            ref={setContentElement}
            {...DOMProps}
            style={{
                ...anchorRect,
                zIndex: 1000,
                width: anchorRect.width || undefined,
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                ...style
            }}
        >
            {children}
        </Content>
    )
})

Anchor.displayName = 'Anchor'

export default Anchor