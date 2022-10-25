import {
    forwardRef,
    Children,
    cloneElement
} from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import IconButton, { IconButtonShapes } from '../IconButton'

import * as Styled from './style'
import type * as Types from './types'
import type { ButtonProps } from '../Button/types'
import type { IconButtonProps } from '../IconButton'
import type { ReactElement } from 'react'

export const ButtonGroup: Types.ButtonGroupComponent = forwardRef((props, ref) => {
    const {
        size,
        variant,
        disabled,
        children,
        ...DOMProps
    } = props

    const className = classNames({
        'fluffy-button-group': true,
        [DOMProps.className || '']: true
    })
    
    return (
        <Styled.Wrapper
            ref={ref}
            $variant={variant}
            {...DOMProps}
            className={className}
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

export default WithThemeProps(ButtonGroup) as Types.ButtonGroupComponent