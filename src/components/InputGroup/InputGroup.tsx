import {
    forwardRef,
    useRef,
    useEffect,
    useCallback,
    Children,
    cloneElement
} from 'react'

import Button from '../Button'
import IconButton from '../IconButton'
import Icon from '../Icon'
import Input from '../Input'

import * as Styled from './style'
import type * as Types from './types'
import type { InputProps } from '../Input/types'
import type { ReactElement } from 'react'

const CLASSNAME_PREFIX = 'input-group'

//TODO: Support text elements to be rendered inside input like the icons
const InputGroup: Types.InputGroupComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        children,
        ...filteredProps
    } = props

    const elements = useRef({
        left: '',
        right: ''
    })

    const getChildType = useCallback((child: ReactElement) => {
        let type = ''

        if (child.type === Input) {
            type = 'input'
        } else if (child.type === Icon) {
            type = 'icon'
        } else if (child.type === Button || child.type === IconButton) {
            type = 'element'
        } else {
            type = 'unknown'
        }

        return type
    }, [])

    useEffect(() => {
        Children.forEach(children, (child, idx) => {
            const childElement = child as ReactElement<InputProps, any>

            if (idx === 0) {
                elements.current.left = childElement && childElement.type !== Input ? getChildType(childElement) : ''
            } else if (idx === (Children.count(children) - 1)) {
                elements.current.right = childElement && childElement.type !== Input ? getChildType(childElement) : ''
            }
        })
    }, [children, getChildType])

    const getChildPosition = useCallback((index: number) => {
        let position = ''

        if (index === 0) {
            position = 'left'
        } else if (index === (Children.count(children) - 1)) {
            position = 'right'
        } else {
            position = 'center'
        }

        return position
    }, [children])


    const getChildClassName = useCallback((child: ReactElement, index: number) => {
        const type = getChildType(child)
        const position = getChildPosition(index)
        
        return `${CLASSNAME_PREFIX}__${type} ${CLASSNAME_PREFIX}--${position}`
    }, [getChildType, getChildPosition])

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size}
            $variant={variant}
            $elements={elements.current}
            {...filteredProps}
        >
            {
                Children.map(children, (child, index) => {
                    const childElement = child as ReactElement<InputProps>

                    if (childElement) {
                        const childClassName = [
                            childElement.props.className || '',
                            getChildClassName(childElement, index)
                        ].join(' ')

                        const childProps = {
                            size: size,
                            variant: variant,
                            ...childElement.props,
                            className: childClassName
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

InputGroup.displayName = 'InputGroup'

export default InputGroup