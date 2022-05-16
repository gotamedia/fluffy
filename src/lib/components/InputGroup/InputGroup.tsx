import {
    forwardRef,
    useRef,
    useEffect,
    Children,
    cloneElement
} from 'react'

import Icon from '../Icon'
import Input from '../Input'

import * as Styled from './style'
import type * as Types from './types'
import type { InputProps } from '../Input/types'
import type { ReactElement } from 'react'

const InputGroup: Types.InputGroupComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        children,
        ...filteredProps
    } = props

    const elements = useRef({
        left: { type: '' },
        right: { type: '' }
    })

    useEffect(() => {
        Children.forEach(children, (child, idx) => {
            const childElement = child as ReactElement<InputProps, any>

            if (childElement && childElement.type !== Input) {
                const type = childElement.type === Icon ? 'icon' : 'unknown'

                if (idx === 0) {
                    elements.current.left = { type: type }
                } else if (idx === (Children.count(children) - 1)) {
                    elements.current.right = { type: type }
                }
            }
        })
    }, [children])

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size}
            $variant={variant}
            {...filteredProps}
        >
            {
                Children.map(children, child => {
                    const childElement = child as ReactElement<InputProps>

                    if (childElement) {
                        const childProps = {
                            size: size,
                            variant: variant,
                            ...childElement.props,
                            className: childElement.props.className || ''
                        } as InputProps
    
                        if (childElement.type === Icon) {
                            childProps.className = `${childProps.className} input-group_icon`
                        }

                        if (childElement.type === Input) {
                            if (elements.current.left?.type === 'icon') {
                                childProps.className = `${childProps.className} with-left-icon`
                            } else if (elements.current.left?.type === 'unknown') {
                                childProps.className = `${childProps.className} with-left-element`
                            }

                            if (elements.current.right?.type === 'icon') {
                                childProps.className = `${childProps.className} with-right-icon`
                            } else if (elements.current.right?.type === 'unknown') {
                                childProps.className = `${childProps.className} with-right-element`
                            }
                        }
    
                        return (
                            cloneElement(childElement, childProps)
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })
            }
        </Styled.Wrapper>
    )
})

export default InputGroup