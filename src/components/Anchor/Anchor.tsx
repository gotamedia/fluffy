import {
    forwardRef,
    useState,
    useImperativeHandle
} from 'react'

import useAnchor from '@hooks/useAnchor'

import * as Types from './types'

const Anchor: Types.AnchorComponent = forwardRef((props, ref) => {
    const {
        anchor,
        padding,
        offset,
        children,
        style,
        ...filterdProps
    } = props

    const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => contentElement as HTMLDivElement, [contentElement])

    const anchorRect = useAnchor({
        anchor: anchor,
        anchored: contentElement,
        padding: padding,
        offset: offset
    })

    return (
        <div
            ref={setContentElement}
            {...filterdProps}
            style={{
                ...anchorRect,
                zIndex: 1000,
                width: anchorRect.width || undefined,
                height: anchorRect.height || undefined,
                position: 'fixed',
                ...style
            }}
        >
            {children}
        </div>
    )
})

Anchor.displayName = 'Anchor'

export default Anchor