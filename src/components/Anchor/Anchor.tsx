import {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect
} from 'react'

import useAnchor from '@hooks/useAnchor'

import * as Types from './types'
import * as Styled from './styles'

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
        pointerColor,
        preventScrollOutside = true,
        ...DOMProps
    } = props

    const contentRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

    useEffect(() => {
        if (preventScrollOutside) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [preventScrollOutside])

    const { pointer, ...anchorRect } = useAnchor({
        anchor: anchor,
        anchored: contentRef.current,
        padding: padding,
        offset: offset,
        forceDirection: forceDirection,
        withPointer
    })

    const styles = {
        ...anchorRect,
        width: anchorRect.width || undefined,
        ...style
    }

    const Tag = withFocusTrap ? Styled.AnchorWithFocusTrap : Styled.Anchor

    return (
        <Tag
            ref={contentRef}
            {...DOMProps}
            style={styles}
            $pointer={pointer}
            $pointerColor={pointerColor}
      >
          {children}
      </Tag>
  )
})

Anchor.displayName = 'Anchor'

export default Anchor
