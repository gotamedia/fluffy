import {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import scrollIntoView from 'scroll-into-view-if-needed'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import {
    ListItemSizes,
    ListItemTypes
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { MouseEventHandler } from 'react'

export const ListItem: Types.ListItemComponent = forwardRef((props, ref) => {
    const {
        type,
        size,
        asTitle,
        scrollOnTargeted,
        text,
        subText,
        icon,
        border,
        targeted,
        selected,
        value,
        onSelect,
        onClick,
        children,
        ...DOMProps
    } = props

    const listItemRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => listItemRef.current as HTMLDivElement)

    useEffect(() => {
        if (scrollOnTargeted && targeted && listItemRef.current) {
            scrollIntoView(listItemRef.current, {
                scrollMode: 'if-needed',
                behavior: 'smooth'
            })
        }
    }, [scrollOnTargeted, targeted])

    const handleOnSelect = useCallback(() => {
        if (typeof onSelect === 'function') {
            onSelect(value)
        }
    }, [onSelect, value])

    const handleOnClick = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (typeof onClick === 'function') {
            onClick(event)
        }

        handleOnSelect()
    }, [onClick, handleOnSelect])

    const className = classNames({
        'fluffy-list-item': true,
        [DOMProps.className || '']: true
    })

    const isTypeSelect = type === ListItemTypes.Select

    const componentState = {
        asTitle: asTitle,
        targeted: targeted,
        hasIcon: !!icon,
        isTypeSelect: isTypeSelect
    }

    return (
        <Styled.Wrapper
            ref={listItemRef}
            tabIndex={-1}
            onClick={handleOnClick}
            {...DOMProps}
            className={className}
            $size={size}
            $componentState={componentState}
        >
            <Styled.InnerWrapper $type={type}>
                {
                    !asTitle && isTypeSelect && selected ? (
                        <Styled.CheckIcon $componentState={componentState}/>
                    ) : (
                        null
                    )
                }

                {
                    !asTitle && icon ? (
                        <Styled.Icon
                            icon={icon}
                            $isTypeSelect={isTypeSelect}
                            $componentState={componentState}
                        />
                    ) : (
                        null
                    )
                }

                <Styled.TextWrapper>
                    {
                        text ? (
                            <Styled.Text $componentState={componentState}>
                                {text}
                            </Styled.Text>
                        ) : (
                            null
                        )
                    }

                    {
                        !asTitle && subText && size === ListItemSizes.TwoRow ? (
                            <Styled.SubText $componentState={componentState}>
                                {subText}
                            </Styled.SubText>
                        ) : (
                            null
                        )
                    }
                </Styled.TextWrapper>

                {children}
            </Styled.InnerWrapper>

            {
                border ? (
                    <Styled.Border
                        //@ts-ignore
                        $border={asTitle ? 'full' : border}
                        $componentState={componentState}
                        className={'fluffy-list-item-border'}
                    />
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

ListItem.displayName = 'ListItem'

export default withThemeProps(ListItem) as Types.ListItemComponent