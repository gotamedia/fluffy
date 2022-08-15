import {
    forwardRef,
    useCallback
} from 'react'

import Portal from '../Portal'

import { OverlayVariants } from '../Overlay'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

const Modal: Types.ModalComponent = forwardRef((props, ref) => {
    const {
        children,
        onClose,
        overlayProps,
        withCloseIcon = true,
        closeOnClickOutside,
        ...DOMProps
    } = props

    const handleOnOverlayClick = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (typeof overlayProps?.onClick === 'function') {
            overlayProps.onClick(event)
        }

        if (closeOnClickOutside) {
            if (typeof onClose === 'function') {
                onClose()
            }
        }
    }, [
        closeOnClickOutside,
        onClose,
        overlayProps
    ])

    return (
        <Portal>
            <Styled.Overlay
                {...overlayProps}
                variant={OverlayVariants.Dim}
                onClick={handleOnOverlayClick}
            >
                <Styled.Wrapper
                    ref={ref}
                    {...DOMProps}
                >
                    {
                        withCloseIcon && (
                            <Styled.CloseIcon onClick={onClose}/>
                        )
                    }

                    {children}
                </Styled.Wrapper>
            </Styled.Overlay>
        </Portal>
    )
})

Modal.displayName = 'Modal'

export default Modal