import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

export const TagSizes = {
    Snall: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const
}

export type TagSizesType = typeof TagSizes
export type TagSizeType = TagSizesType[keyof TagSizesType]

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
    label: string,
    size?: TagSizeType
}

export type TagRef = HTMLDivElement

export type TagComponent = ForwardRefExoticComponent<TagProps & RefAttributes<TagRef>>