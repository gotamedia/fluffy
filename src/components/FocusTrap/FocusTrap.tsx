import {
    forwardRef,
    useRef,
    useCallback,
    useEffect
} from 'react'

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

const FocusTrap: Types.FocusTrapComponent = forwardRef((props, ref) => {
    const {
        children,
        disabled,
        onKeyDown,
        trapTarget,
        focusableElementsQuery,
        useGlobalListener,
        ...DOMProps
    } = props

    const trapContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(trapContainerRef.current)
            } else {
                ref.current = trapContainerRef.current
            }
        }
    }, [ref])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        if (!disabled) {
            if (event.code === 'Tab') {
                const trapContainer = trapTarget?.current ? trapTarget.current : trapContainerRef.current!
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
                    console.warn(`Couldn'ref find any focusable elements to trap the focus`)
                }
            }
        }
    }, [
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

    return (
        <Styled.Wrapper
            ref={trapContainerRef}
            onKeyDown={!useGlobalListener ? handleOnKeyDown : undefined}
            {...DOMProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

FocusTrap.displayName = 'FocusTrap'

export default FocusTrap