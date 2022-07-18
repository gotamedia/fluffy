import {
    forwardRef,
    Children,
    cloneElement
} from 'react'

import IconButton, { IconButtonShapes } from '../IconButton'

import * as Styled from './style'
import type * as Types from './types'
import type { ButtonProps } from '../Button/types'
import type { IconButtonProps } from '../IconButton'
import type { ReactElement } from 'react'

const ButtonGroup: Types.ButtonGroupComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        disabled,
        children,
        ...DOMProps
    } = props
    
    return (
        <Styled.Wrapper
            ref={ref}
            $variant={variant}
            {...DOMProps}
        >
            {Children.map(children, (child) => {
                const childElement = child as ReactElement<ButtonProps>

                if (childElement) {
                    const childProps = {
                        size: size,
                        variant: variant,
                        disabled: disabled,
                        ...childElement.props
                    }

                    if (childElement.type === IconButton) {
                        (childProps as IconButtonProps).shape = IconButtonShapes.Square
                    }

                    return (
                        cloneElement(childElement, childProps)
                    )
                } else {
                    return (
                        null
                    )
                }
            })}
        </Styled.Wrapper>
    )
})

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup