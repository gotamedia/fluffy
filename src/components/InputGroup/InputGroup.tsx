import {
    forwardRef,
    useState,
    useCallback,
    Children,
    cloneElement
} from 'react'

import classNames from '@utils/classNames'

import useIsomorphicLayoutEffect from '@root/hooks/useIsomorphicLayoutEffect'

import Button from '../Button'
import IconButton from '../IconButton'
import Icon from '../Icon'
import Input from '../Input'

import * as Styled from './style'
import type * as Types from './types'
import type { InputProps } from '../Input/types'
import type { ReactElement } from 'react'

const CLASSNAME_PREFIX = 'fluffy-input-group'

type StyledComponentType = { target: ReactElement['type'] }

const _getChildType = (child: ReactElement) => {
    let type = ''

    if (
        child.type === Input ||
        (child.type as unknown as StyledComponentType)?.target === Input
    ) {
        type = 'input'
    } else if (
        child.type === Icon ||
        (child.type as unknown as StyledComponentType)?.target === Icon
    ) {
        type = 'icon'
    } else if (
        child.type === Button ||
        (child.type as unknown as StyledComponentType)?.target === Button ||
        child.type === IconButton ||
        (child.type as unknown as StyledComponentType)?.target === IconButton
    ) {
        type = 'element'
    } else {
        type = 'unknown'
    }

    return type
}

//TODO: Support text elements to be rendered inside input like the icons
const InputGroup: Types.InputGroupComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        children,
        ...filteredProps
    } = props

    const [elements, setElements] = useState({
        left: '',
        right: ''
    })

    useIsomorphicLayoutEffect(() => {
        const elements = {
            left: '',
            right: ''
        }

        Children.forEach(children, (child, idx) => {
            const childElement = child as ReactElement<InputProps, any>

            if (idx === 0) {
                elements.left = childElement && childElement.type !== Input ? _getChildType(childElement) : ''
            } else if (idx === (Children.count(children) - 1)) {
                elements.right = childElement && childElement.type !== Input ? _getChildType(childElement) : ''
            }

            setElements(current => {
                return {
                    ...current,
                    ...elements
                }
            })
        })
    }, [children])

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
        const type = _getChildType(child)
        const position = getChildPosition(index)
        
        return `${CLASSNAME_PREFIX}__${type} ${CLASSNAME_PREFIX}--${position}`
    }, [getChildPosition])

    const className = classNames({
        [CLASSNAME_PREFIX]: true,
        [filteredProps.className || '']: true
    })

    const componentState = {
        elements: elements
    }

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size}
            $variant={variant}
            $componentState={componentState}
            {...filteredProps}
            className={className}
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