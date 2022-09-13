import {
    forwardRef,
    Children,
    cloneElement
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import * as Styled from './style'
import type * as Types from './types'
import type { ReactElement } from 'react'

export const Button: Types.ButtonComponent = forwardRef((props, ref) => {
    const {
        size,
        variant,
        children,
        ...DOMProps
    } = props

    const className = classNames({
        'fluffy-button': true,
        [DOMProps.className || '']: true
    })
    
    return (
        <Styled.Button
            ref={ref}
            $size={size}
            $variant={variant}
            {...DOMProps}
            className={className}
        >
            {Children.map(children, (child) => {
                if (child) {
                    if (typeof child === 'string' || typeof child === 'number') {
                        return (
                            <Styled.ButtonTexts>
                                {child}
                            </Styled.ButtonTexts>
                        )
                    } else {
                        const childElement = child as ReactElement<Types.ButtonProps>
    
                        const childProps = {
                            size: size,
                            variant: variant,
                            ...childElement.props
                        } as Types.ButtonProps

                        return (
                            cloneElement(childElement, childProps)
                        )
                    }
                } else {
                    return (
                        null
                    )
                }
            })}
        </Styled.Button>
    )
})

Button.displayName = 'Button'

export default withThemeProps(Button) as Types.ButtonComponent