import {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import scrollIntoView from 'scroll-into-view-if-needed'

import {
    ListItemSizes,
    ListItemTypes
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { MouseEventHandler } from 'react'

const ListItem: Types.ListItemComponent = forwardRef((props, ref) => {
    const {
        type = 'normal',
        size = 'normal',
        asTitle = false,
        scrollOnTargeted = true,
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

    const isTypeSelect = type === ListItemTypes.Select

    return (
        <Styled.Wrapper
            ref={listItemRef}
            tabIndex={-1}
            onClick={handleOnClick}
            {...DOMProps}
            $size={size}
            $targeted={targeted}
            $asTitle={asTitle}
        >
            <Styled.InnerWrapper
                $type={type}
                $hasIcon={!!icon}
            >
                {
                    !asTitle && isTypeSelect && selected ? (
                        <Styled.CheckIcon />
                    ) : (
                        null
                    )
                }

                {
                    !asTitle && icon ? (
                        <Styled.Icon
                            icon={icon}
                            $isTypeSelect={isTypeSelect}
                        />
                    ) : (
                        null
                    )
                }

                <Styled.TextWrapper>
                    {
                        text ? (
                            <Styled.Text>
                                {text}
                            </Styled.Text>
                        ) : (
                            null
                        )
                    }

                    {
                        !asTitle && subText && size === ListItemSizes.TwoRow ? (
                            <Styled.SubText>
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
                        $border={border}
                        $hasIcon={!!icon}
                        $type={type}
                    />
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

ListItem.displayName = 'ListItem'

export default ListItem