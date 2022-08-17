import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

export type TagItem = {
    id: string | number,
    label: string,
    selected?: boolean,
    isNew?: boolean
}

export interface TagSearchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    disabled?: boolean,
    tags: TagItem[],
    createable?: boolean,
    filterNewTagsFromList?: boolean,
    showListOnInput?: boolean,
    onAdd?: (tag: TagItem) => void,
    onRemove?: (tag: TagItem) => void,
    onChange?: (tags: TagItem[]) => void,
    onCreate?: (value: string) => void
}

export type TagSearchRef = HTMLDivElement

export type TagSearchComponent = ForwardRefExoticComponent<TagSearchProps & RefAttributes<TagSearchRef>>