import {
    forwardRef,
    useCallback,
    useRef,
    useImperativeHandle,
    useEffect
} from 'react'

import classNames from '@utils/classNames'
import Portal from '@components/Portal'

import useScrollPosition from '@hooks/useScrollPosition'
import useDidValueChanged from '@hooks/useDidValueChanged'
import useOutsideClick from '@hooks/useOutsideClick'

import withThemeProps from '@internal/hocs/withThemeProps'

import * as Styled from './style'
import * as Types from './types'

export const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        onClickOutside,
        anchor,
        onScrollOutside,
        ...filterdProps
    } = props
    
    const contentRef = useRef<HTMLDivElement | null>(null)
    
    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

    const position = useScrollPosition()

    const positionValue = show ? position : undefined

    const positionCompare = useCallback((prev: typeof positionValue, curr: typeof positionValue) => {
        return [prev, curr].includes(undefined)
    }, [])

    const didScrollPositionChanged = useDidValueChanged(positionValue, positionCompare)

    useEffect(() => {
        if (show && onScrollOutside && typeof onScrollOutside === 'function') {
            if (didScrollPositionChanged) {
                onScrollOutside()
            }
        }
    }, [
        show,
        onScrollOutside,
        didScrollPositionChanged
    ])

    const handleOnClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
        if (typeof onClickOutside === 'function' && !anchor?.contains(event.target as Node)) {
            onClickOutside(event)
        }
    }, [anchor, onClickOutside])

    useOutsideClick(contentRef, handleOnClickOutside)

    const className = classNames({
        'fluffy-popover': true,
        [filterdProps.className || '']: true
    })

    return (
        show ? (
            <Portal>
                <Styled.Anchor
                    ref={contentRef}
                    anchor={anchor}
                    {...filterdProps}
                    className={className}
                    >
                    {children}
                </Styled.Anchor>
            </Portal>
        ) : (
            null
        )
    )
})

Popover.displayName = 'Popover'

export default withThemeProps(Popover) as Types.PopoverComponent
