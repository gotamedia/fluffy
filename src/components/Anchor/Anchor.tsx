import {
    forwardRef,
    useImperativeHandle,
    useRef
} from 'react'

import useAnchor from '@hooks/useAnchor'

import * as Styled from './styles'
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
        withPointer,
        backgroundColor,
        alignment,
        ...DOMProps
    } = props

    const contentRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

    const { pointer, ...anchorRect } = useAnchor({
        anchor: anchor,
        anchored: contentRef.current,
        padding: padding,
        offset: offset,
        forceDirection: forceDirection,
        alignment:  alignment,
        withPointer
    })

    const styles = {
        ...anchorRect,
        width: anchorRect.width || undefined,
        opacity: anchorRect.width ? 1 : 0,
        ...style
    }

    const Tag = withFocusTrap ? Styled.AnchorWithFocusTrap : Styled.Anchor

    return (
        <Tag
            ref={contentRef}
            {...DOMProps}
            style={styles}
            $pointer={pointer}
            $backgroundColor={backgroundColor}
        >
          {children}
      </Tag>
  )
})

Anchor.displayName = 'Anchor'

export default Anchor
