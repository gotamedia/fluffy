import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import Tag, { TagSizes } from '../Tag'
import List from '../List'
import ListItem, { ListItemTypes } from '../ListItem'
import Popover from '../Popover'
import Icon, { Icons } from '../Icon'

import * as Styled from './style'
import type * as Types from './types'
import type { ListRef } from '../List'
import type {
    MouseEventHandler,
    KeyboardEventHandler
} from 'react'

const TagSearch: Types.TagSearchComponent = forwardRef((props, ref) => {
    const {
        disabled,
        tags,
        createable,
        filterNewTagsFromList = true,
        showListOnInput,
        onAdd,
        onRemove,
        onChange,
        onCreate,
        ...DOMProps
    } = props

    const tagsRef = useRef<Types.TagItem[]>(tags)
    const listRef = useRef<ListRef>(null)
    
    const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null)
    const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null)
    const [showPopover, setShowPopover] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useImperativeHandle(ref, () => {
        return wrapperRef as HTMLDivElement
    }, [wrapperRef])

    useEffect(() => {
        tagsRef.current = tags
    }, [tags])

    useEffect(() => {
        if (showPopover && inputRef) {
            inputRef.focus()
        }
    }, [showPopover, inputRef])

    const handleOnInputFocus = useCallback(() => {
        setShowPopover(true)
    }, [])

    const handleCreateNewTag = useCallback((value: string) => {
        if (createable && typeof onCreate === 'function') {
            onCreate(value)
        }
    }, [createable, onCreate])

    const pipeKeyDownToList = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
        if (listRef.current) {
            listRef.current.setFocus(true)
            const customEvent = new KeyboardEvent('keydown', event as unknown as KeyboardEvent)
            listRef.current.dispatchEvent(customEvent)
        }
    }, [])

    const handleOnInputValueChange = useCallback((value: string) => {
        setInputValue(value)
    }, [])

    const handleOnInputKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
        event.stopPropagation()

        switch (event.code) {
            case 'ArrowUp':
            case 'ArrowDown': {
                event.preventDefault()
                pipeKeyDownToList(event)

                break
            }

            case 'Enter': {
                if (listRef?.current?.isFocused) {
                    event.preventDefault()
                    pipeKeyDownToList(event)
                } else {
                    setInputValue('')
                    handleCreateNewTag(event.target.value)
                }

                break
            }

            default:
                if (listRef.current) {
                    listRef.current.setFocus(false)
                }
        }
    }, [pipeKeyDownToList, handleCreateNewTag])

    const handleOnChange = useCallback((tag: Types.TagItem) => {
        const tagItems = tagsRef.current!.map(item => {
            if (item.id === tag.id) {
                return tag
            } else {
                return item
            }
        })
        
        onChange?.(tagItems)
    }, [onChange])

    const handleOnRemove = useCallback((selectedTag: Types.TagItem) => {
        const tagItem = {
            ...selectedTag,
            selected: false
        }

        onRemove?.(tagItem)
        handleOnChange(tagItem)
    }, [onRemove, handleOnChange])

    const handleOnSelect = useCallback((selectedTag: Types.TagItem) => {
        setInputValue('')

        if (selectedTag.selected) {
            handleOnRemove(selectedTag)
        } else {
            const tagItem = {
                ...selectedTag,
                selected: true
            }
    
            onAdd?.(tagItem)
            handleOnChange(tagItem)
        }
    }, [handleOnRemove, onAdd, handleOnChange])

    const handleOnTagRemove = useCallback((selectedTag: Types.TagItem): MouseEventHandler<HTMLButtonElement> => {
        return (event) => {
            event.stopPropagation()
            handleOnRemove(selectedTag)
        }
    }, [handleOnRemove])

    const hasTags = Array.isArray(tags) && tags.length ? true : false

    const maxWidth = ((wrapperRef?.getBoundingClientRect()?.width || 0) - 20) || 'unset'

    const selectedTags = (
        hasTags ? (
            <Styled.TagsWrapper
                $asInput={!showPopover}
                style={{
                    maxWidth: maxWidth
                }}
            >
                {
                    hasTags ? (
                        tags.map(tag => {
                            if (tag.selected) {
                                return (
                                    <Tag
                                        disabled={disabled}
                                        key={tag.id}
                                        label={tag.label}
                                        size={TagSizes.Small}
                                        onRemove={handleOnTagRemove(tag)}
                                    />
                                )
                            } else {
                                return null
                            }
                        })
                    ) : (
                        null
                    )
                }
            </Styled.TagsWrapper>
        ) : (
            null
        )
    )

    return (
        <Styled.Wrapper
            ref={setWrapperRef}
            {...DOMProps}
            $disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            onFocus={!disabled ? handleOnInputFocus : undefined}
        >
            {
                !showPopover ? (
                    <Styled.ElementsWrapper>
                        <Styled.SearchIcon />

                        {selectedTags}

                        <Styled.ArrowIcon />
                    </Styled.ElementsWrapper>
                ) : (
                    null
                )
            }

            <Popover
                show={showPopover}
                anchor={wrapperRef}
                offset={{
                    y: -40
                }}
                tabIndex={disabled ? -1 : 0}
                onClickOutside={() => setShowPopover(false)}
            >
                <Styled.InnerWrapper>
                    <Styled.InputGroup>
                        <Icon icon={Icons.Search} />

                        <Styled.Input
                            ref={setInputRef}
                            value={inputValue}
                            onKeyDown={handleOnInputKeyDown}
                            onValueChange={handleOnInputValueChange}
                        />

                        <Icon icon={Icons.ArrowUp} />
                    </Styled.InputGroup>

                    {selectedTags}

                    {
                        !showListOnInput || inputValue ? (
                            <List
                                ref={listRef}
                                type={ListItemTypes.Select}
                                onSelect={handleOnSelect}
                            >
                                {
                                    hasTags ? (
                                        tags
                                            .filter(tag => {
                                                if (showListOnInput) {
                                                    if (inputValue) {
                                                        return tag
                                                            .label
                                                            .toLowerCase()
                                                            .includes(inputValue.toLowerCase())
                                                    } else {
                                                        return false
                                                    }
                                                } else {
                                                    return true
                                                }
                                            })
                                            .map(tag => {
                                                if (!filterNewTagsFromList || !tag.isNew) {
                                                    return (
                                                        <ListItem
                                                            key={tag.id}
                                                            text={tag.label}
                                                            value={tag}
                                                            selected={tag.selected}
                                                        />
                                                    )
                                                } else {
                                                    return null
                                                }
                                            })
                                    ) : (
                                        null
                                    )
                                }
                            </List>
                        ) : (
                            null
                        )
                    }

                </Styled.InnerWrapper>
            </Popover>
        </Styled.Wrapper>
    )
})

TagSearch.displayName = 'TagSearch'

export default TagSearch