import {
    forwardRef,
    Children,
    cloneElement
} from 'react'

import {
    ButtonSizes,
    ButtonVariants,
    ButtonVariantTypes
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { ReactElement } from 'react'

const Button: Types.ButtonComponent = forwardRef((props, ref) => {
    const {
        size = ButtonSizes.Normal,
        variant = ButtonVariants.Primary,
        variantType = ButtonVariantTypes.Default,
        children,
        ...DOMProps
    } = props
    
    return (
        <Styled.Button
            ref={ref}
            $size={size}
            $variant={variant}
            $variantType={variantType}
            {...DOMProps}
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

export default Button