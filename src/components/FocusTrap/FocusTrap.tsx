import {
    forwardRef,
    useState,
    useImperativeHandle,
    useCallback,
    useEffect
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import type { KeyboardEventHandler } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const defaultFocusableElementsQuery = [
    'input:not(:disabled)',
    'textarea:not(:disabled)',
    'button:not(:disabled)',
    'select:not(:disabled)',
    '[href]',
    '[tabindex]:not([tabindex="-1"])'
]

export const FocusTrap: Types.FocusTrapComponent = forwardRef((props, ref) => {
    const {
        children,
        disabled,
        onKeyDown,
        trapTarget,
        focusableElementsQuery,
        useGlobalListener,
        ...DOMProps
    } = props

    const [trapContainerRef, setTrapContainerRef] = useState<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => trapContainerRef as HTMLDivElement, [trapContainerRef])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        if (!disabled) {
            if (event.code === 'Tab') {
                const trapContainer = trapTarget?.current ? trapTarget.current : trapContainerRef!
                const query = Array.isArray(focusableElementsQuery) && focusableElementsQuery.length ? (
                    focusableElementsQuery
                ) : (
                    defaultFocusableElementsQuery
                )
                // @ts-ignore
                const elements = Array.from(trapContainer.querySelectorAll(query))

                if (Array.isArray(elements) && elements.length) {
                    const firstElement = elements[0]
                    const lastElement = elements[elements.length - 1]

                    if (event.shiftKey) {
                        if (document.activeElement === firstElement) {
                            event.preventDefault()
                            lastElement.focus()
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            event.preventDefault()
                            firstElement.focus()
                        }
                    }
                } else {
                    console.warn(`Couldn't find any focusable elements to trap the focus`)
                }
            }
        }
    }, [
        trapContainerRef,
        disabled,
        focusableElementsQuery,
        onKeyDown,
        trapTarget
    ])

    useEffect(() => {
        if (useGlobalListener) {
            window.addEventListener('keydown', handleOnKeyDown as any)
        }

        return () => {
            if (useGlobalListener) {
                window.removeEventListener('keydown', handleOnKeyDown as any)
            }
        }
    }, [useGlobalListener, handleOnKeyDown])

    const className = classNames({
        'fluffy-focus-trap': true,
        [DOMProps.className || '']: true
    })

    return (
        <Styled.Wrapper
            ref={setTrapContainerRef}
            onKeyDown={!useGlobalListener ? handleOnKeyDown : undefined}
            {...DOMProps}
            className={className}
        >
            {children}
        </Styled.Wrapper>
    )
})

FocusTrap.displayName = 'FocusTrap'

export default withThemeProps(FocusTrap) as Types.FocusTrapComponent