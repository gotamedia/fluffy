import {
    forwardRef,
    useRef,
    useState,
    useMemo,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'
import merge from 'lodash/merge'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import {
    ButtonSizes,
    ButtonVariants,
    ButtonVariantTypes
} from '@components//Button'

import SelectTrigger from './components/SelectTrigger'
import SelectFilter from './components/SelectFilter'

import { SelectTypes } from './types'

import selectI18n from './i18n.json'

import * as Styled from './style'
import type * as Types from './types'
import type { ListRef } from '@components/List/types'
import type { KeyboardEventHandler } from 'react'

const getLabel = (items: Types.SelectItem[], placeholder?: string) => {
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
        return selectedLabels.join(', ')
    } else {
        return placeholder
    }
}

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
        state,
        disabled,
        showFilter,
        i18n,
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)
    const shouldfocusTrigger = useRef(false)
    const initiatedRef = useRef(false)
    const filterRef = useRef<HTMLInputElement>(null)

    const [label, setLabel] = useState(getLabel(items, placeholder))
    const [filterValue, setFilterValue] = useState('')
    const [slectItems, setSelectItems] = useState(items)
    const [triggerRef, setTriggerRef] = useState<HTMLElement | null>(null)
    const [listRef, setListRef] = useState<ListRef>()
    const [triggerWidth, setTriggerWidth] = useState<Types.SelectProps['width']>(width)

    const [isOpen, setIsOpen] = useState(!width && !minWidth ? true : false)

    const _i18n = useMemo(() => {
        return merge(selectI18n, i18n)
    }, [i18n])

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (!width && !minWidth) {
            if (listRef && triggerWidth === undefined) {
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
        setLabel(getLabel(items, placeholder))
    }, [items, placeholder])

    useEffect(() => {
        if (showFilter && filterValue.length) {
            const updatedItems = items.map(item => {
                let shouldIncludeHit = false

                const updatedItem = { ...item }

                if (updatedItem.text?.toLowerCase().includes(filterValue.toLowerCase())) {
                    shouldIncludeHit = true
                }

                if (updatedItem.nested?.length) {
                    updatedItem.nested = updatedItem.nested.filter(nestedItem => {
                        if (nestedItem.text?.toLowerCase().includes(filterValue.toLowerCase())) {
                            shouldIncludeHit = true
                            return true
                        } else {
                            return false
                        }
                    })
                }

                if (shouldIncludeHit) {
                    return updatedItem
                } else {
                    return null
                }
            }).filter(i => i)

            setSelectItems(updatedItems as Types.SelectItem[])
        } else {
            setSelectItems(items)
        }
    }, [showFilter, filterValue, items])

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

        if (!isOpen) {
            setFilterValue('')
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

    const handleOnFilterChange = useCallback((value: string) => {
        setFilterValue(value)
    }, [])

    const handleOnfilterKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
        event.stopPropagation()

        switch (event.code) {
            case 'ArrowUp': {
                listRef?.handleOnKeyDown?.(event)

                break
            }

            case 'ArrowDown': {
                listRef?.handleOnKeyDown?.(event)

                break
            }

            case 'Enter': {
                listRef?.handleOnKeyDown?.(event)

                break
            }

            default:
                listRef?.setFocus?.(false)
        }
    }, [listRef])

    const handleOnListFocus = useCallback(() => {
        if (filterRef.current) {
            filterRef.current.focus({
                preventScroll: true
            })
        }
    }, [])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof listProps?.onKeyDown === 'function') {
            listProps.onKeyDown(event)
        }

        if (isOpen) {
            switch (event.code) {
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
                {...triggerProps}
                style={{
                    width: triggerWidth,
                    minWidth: minWidth,
                    ...triggerProps?.style
                }}
                label={label}
                state={state}
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
                {
                    showFilter && (
                        <SelectFilter
                            ref={filterRef}
                            style={{
                                width: triggerWidth,
                                minWidth: minWidth
                            }}
                            value={filterValue}
                            onChange={handleOnFilterChange}
                            onKeyDown={handleOnfilterKeyDown}
                        />
                    )
                }

                <Styled.List
                    type={type}
                    {...listProps}
                    // @ts-ignore
                    ref={setListRef}
                    onSelect={handleOnMainSelect}
                    onKeyDown={handleOnKeyDown}
                    onFocus={handleOnListFocus}
                    $withFooter={withFooter}
                    style={{
                        width: triggerWidth,
                        minWidth: minWidth,
                        marginTop: showFilter ? -1 : undefined
                    }}
                >
                    {
                        slectItems.map((item) => {
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
                        <Styled.Footer
                            style={{
                                width: triggerWidth,
                                minWidth: minWidth
                            }}
                        >
                            {
                                showResetButton ? (
                                    <Styled.ResetButton
                                        onClick={handleOnReset}
                                        size={ButtonSizes.Small}
                                        variant={ButtonVariants.Text}
                                        variantType={ButtonVariantTypes.Link}
                                    >
                                        {_i18n.reset}
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
                                        {_i18n.apply}
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