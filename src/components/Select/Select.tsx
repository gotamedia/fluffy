import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import {
    ButtonSizes,
    ButtonVariants,
    ButtonVariantTypes
} from '@components//Button'

import SelectTrigger from './components/SelectTrigger'
import { SelectTypes } from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { KeyboardEventHandler } from 'react'


const Select: Types.SelectComponent = forwardRef((props, ref) => {
    const {
        triggerProps,
        onClickOutside,
        closeOnScrollOutside,
        placeholder,
        listProps,
        items = [],
        onChange,
        onApply,
        onReset,
        width,
        minWidth,
        type = SelectTypes.Select,
        closeOnSelect = false,
        isMultiSelect = false,
        showResetButton = false,
        showApplyButton = false,
        resetButtonLabel = 'Reset',
        applyButtonLabel = 'Apply',
        state,
        disabled,
        showFilter,
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)
    const shouldfocusTrigger = useRef(false)
    const initiatedRef = useRef(false)

    const [label, setLabel] = useState(placeholder)
    const [triggerRef, setTriggerRef] = useState<HTMLElement | null>(null)
    const [listRef, setListRef] = useState<HTMLDivElement | null>(null)
    const [triggerWidth, setTriggerWidth] = useState<Types.SelectProps['width']>(width)

    const [isOpen, setIsOpen] = useState(!width && !minWidth ? true : false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (!width && !minWidth) {
            if (listRef && triggerWidth === undefined ) {
                const listRect = listRef.getBoundingClientRect()

                setTriggerWidth(listRect.width + 38)
                setIsOpen(false)

                initiatedRef.current = true
                shouldfocusTrigger.current = true
            }
        } else {
            initiatedRef.current = true
            shouldfocusTrigger.current = true
        }
    }, [
        width,
        minWidth,
        listRef,
        triggerWidth
    ])

    useEffect(() => {
        const selectedLabels: string[] = []

        items.forEach((i) => {
            if (i.selected && !i.indeterminate && i.label) {
                selectedLabels.push(i.label)
            } else {
                i?.nested?.forEach((k) => {
                    if (k.selected && k.label) {
                        selectedLabels.push(k.label)
                    }
                })
            }
        })

        if (selectedLabels.length) {
            setLabel(selectedLabels.join(', '))
        } else {
            setLabel(placeholder)
        }
    }, [items, placeholder])

    useEffect(() => {
        if (shouldfocusTrigger.current) {
            if (!isOpen && previousIsOpenState.current && triggerRef) {
                triggerRef.focus()
            }
        }
    }, [isOpen, triggerRef])

    useEffect(() => {
        if (initiatedRef.current) {
            previousIsOpenState.current = isOpen
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen && listRef) {
            if (document.activeElement !== listRef) {
                listRef.focus()
            }
        }
    }, [isOpen, listRef])

    const handleOnClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        setIsOpen(false)
    }, [onClickOutside])

    const toggleOpen = useCallback(() => {
        setIsOpen(current => !current)
    }, [])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof listProps?.onKeyDown === 'function') {
            listProps.onKeyDown(event)
        }

        if (isOpen) {
            switch(event.code) {
                case 'Escape': {
                    event.preventDefault()
                    event.stopPropagation()

                    setIsOpen(false)
                }
            }
        }
    }, [isOpen, listProps])

    const handleOnChange = useCallback((items: Types.SelectItem[]) => {
        if (typeof onChange === 'function') {
            onChange(items)
        }

        if (!isMultiSelect || closeOnSelect) {
            setIsOpen(false)
        }
    }, [closeOnSelect, isMultiSelect, onChange])

    const handleOnMainSelect = useCallback((selectedItem: Types.SelectItem) => {
        const updatedItmes = items.map(i => {
            if (i.id === selectedItem.id) {
                const isNextSelected = Array.isArray(i.nested) && i.nested.length ? (
                    i.nested.every((i) => i.selected) ? false : true
                ) : (
                    !i.selected
                )

                return {
                    ...i,
                    selected: isNextSelected,
                    indeterminate: false,
                    nested: i?.nested?.map((k) => {
                        return {
                            ...k,
                            selected: isNextSelected
                        }
                    })
                }
            } else {
                if (isMultiSelect) {
                    return i
                } else {
                    return {
                        ...i,
                        selected: false
                    }
                }
            }
        })

        handleOnChange(updatedItmes)
    }, [handleOnChange, items, isMultiSelect])

    const handleOnNestedSelect = useCallback((selectedItem: Types.BaseNestedSelectItem) => {
        const updatedItems = items.map(i => {
            if (i.id === selectedItem.parentId) {                    
                const nextNested = i?.nested?.map((k) => {
                    if (k.id === selectedItem.id) {
                        return {
                            ...k,
                            selected: k.selected ? false : true
                        }
                    } else {
                        return k
                    }
                }) || []

                return {
                    ...i,
                    selected: nextNested.every((j) => j.selected),
                    indeterminate: !nextNested.every((j) => j.selected) && nextNested.some((j) => j.selected),
                    nested: nextNested
                }
            } else {
                return i
            }
        })

        handleOnChange(updatedItems)
    }, [handleOnChange, items])

    const handleOnApply = useCallback(() => {
        if (typeof onApply === 'function') {
            onApply()
        }

        setIsOpen(false)
    }, [onApply])

    const handleOnReset = useCallback(() => {
        const updatedItmes = items.map(item => {
            return {
                ...item,
                selected: false,
                indeterminate: false,
                nested: Array.isArray(item.nested) ? (
                    item.nested.map((nestedItem) => {
                        return {
                            ...nestedItem,
                            selected: false
                        }
                    })
                ) : (
                    item.nested
                )
            }
        })

        handleOnChange(updatedItmes)

        if (typeof onReset === 'function') {
            onReset()
        }
    }, [handleOnChange, items, onReset])

    const withFooter = showResetButton || showApplyButton

    return (
        <>
            <SelectTrigger
                ref={setTriggerRef}
                state={state}
                style={{
                    width: triggerWidth,
                    minWidth: minWidth,
                    ...triggerProps?.style
                }}
                label={label}
                isOpen={isOpen}
                disabled={disabled}
                toggleOpen={toggleOpen}
            />

            <Styled.Popover
                {...filterdProps}
                ref={undefined}
                offset={{
                    x: -1,
                    y: -2
                }}
                show={isOpen}
                anchor={triggerRef}
                onClickOutside={handleOnClickOutside}
                onScrollOutside={closeOnScrollOutside ? toggleOpen : undefined}
            >
                <Styled.List
                    type={type}
                    {...listProps}
                    showFilter={showFilter}
                    ref={setListRef}
                    onSelect={handleOnMainSelect}
                    onKeyDown={handleOnKeyDown}
                    $withFooter={withFooter}
                    style={{
                        width: triggerWidth,
                        minWidth: minWidth
                    }}
                >
                    {
                        items.map((item) => {                        
                            return (
                                <Styled.SelectListItem
                                    key={item.id}
                                    {...item}
                                    value={item}
                                    onSelect={handleOnMainSelect}
                                >
                                    {
                                        Array.isArray(item.nested) && item.nested.length ? (
                                            item.nested.map((nestedItem) => {
                                                return (
                                                    <Styled.SelectListItem
                                                        key={nestedItem.id}
                                                        {...nestedItem}
                                                        targeted={false}
                                                        $isNested={true}
                                                        value={nestedItem}
                                                        onSelect={handleOnNestedSelect}
                                                    />
                                                )
                                            })
                                        ) : (
                                            undefined
                                        )
                                    }
                                </Styled.SelectListItem>
                            )
                        })
                    }
                </Styled.List>

                {
                    withFooter ? (
                        <Styled.Footer>
                            {
                                showResetButton ? (
                                    <Styled.ResetButton
                                        onClick={handleOnReset}
                                        size={ButtonSizes.Small}
                                        variant={ButtonVariants.Text}
                                        variantType={ButtonVariantTypes.Link}
                                    >
                                        {resetButtonLabel}
                                    </Styled.ResetButton>
                                ) : (
                                    null
                                )
                            }

                            {
                                showApplyButton ? (
                                    <Styled.ApplyButton
                                        onClick={handleOnApply}
                                        size={ButtonSizes.Small}
                                    >
                                        {applyButtonLabel}
                                    </Styled.ApplyButton>
                                ) : (
                                    null
                                )
                            }
                        </Styled.Footer>
                    ) : (
                        null
                    )
                }
            </Styled.Popover>
        </>
    )
})

Select.displayName = 'Select'

export default Select
