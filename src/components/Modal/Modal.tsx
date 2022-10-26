import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import Portal from '../Portal'

import { OverlayVariants } from '../Overlay'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

export const Modal: Types.ModalComponent = forwardRef((props, ref) => {
    const {
        children,
        onClose,
        overlayProps,
        withCloseIcon,
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

    const className = classNames({
        'fluffy-modal': true,
        [DOMProps.className || '']: true
    })

    return (
        <Portal>
            <Styled.Overlay
                {...overlayProps}
                variant={OverlayVariants.Dim}
                onClick={handleOnOverlayClick}
            >
                <Styled.FocusTrapWrapper
                    ref={ref}
                    {...DOMProps}
                    className={className}
                >
                    {
                        withCloseIcon && (
                            <Styled.CloseIcon onClick={onClose} />
                        )
                    }

                    {children}
                </Styled.FocusTrapWrapper>
            </Styled.Overlay>
        </Portal>
    )
})

Modal.displayName = 'Modal'

export default withThemeProps(Modal) as Types.ModalComponent