import { forwardRef } from 'react'

import Portal from '../Portal'

import * as Styled from './style'
import * as Types from './types'

const Modal: Types.ModalComponent = forwardRef((props, ref) => {
    const {
        children,
        onClose,
        ...DOMProps
    } = props

    return (
        <Portal>
            <Styled.Overlay>
                <Styled.Wrapper
                    ref={ref}
                    {...DOMProps}
                >
                    <Styled.CloseIcon onClick={onClose}/>

                    {children}
                </Styled.Wrapper>
            </Styled.Overlay>
        </Portal>
    )
})

Modal.displayName = 'Modal'

export default Modal