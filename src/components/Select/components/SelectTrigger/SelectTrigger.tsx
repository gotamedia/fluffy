import {
    forwardRef,
    useCallback
} from 'react'

import { IconSizes, Icons } from '@components/Icon'

import * as Styled from './style'
import type * as Types from './types'
import type { KeyboardEventHandler } from 'react'

const SelectTrigger: Types.SelectTriggerComponent = forwardRef((props, ref) => {
    const {
        style,
        isOpen,
        label,
        state,
        disabled,
        toggleOpen
    } = props

    const handleOnClick = useCallback(() => {
        if (!disabled) {
            toggleOpen()
        }
    }, [disabled, toggleOpen])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (!disabled) {
            switch (event.code) {
                case 'Enter':
                case 'Space': {
                    if (!isOpen) {
                        event.stopPropagation()
                        event.preventDefault()
                        
                        toggleOpen()
                    }
    
                    break
                }
    
                case 'Escape': {
                    if (isOpen) {
                        toggleOpen()
                    }
    
                    break
                }
            }
        }
    }, [disabled, isOpen, toggleOpen])

    return (
        <Styled.Wrapper
            ref={ref}
            style={style}
            tabIndex={0}
            $state={state}
            $disabled={disabled}
            onClick={handleOnClick}
            onKeyDown={handleOnKeyDown}
        >
            <Styled.Label>
                {label}
            </Styled.Label>

            <Styled.Border $state={state} />

            <Styled.Icon
                size={IconSizes.Tiny}
                icon={isOpen ? Icons.ChevronUp : Icons.ChevronDown}
            />
        </Styled.Wrapper>
    )
})

export default SelectTrigger