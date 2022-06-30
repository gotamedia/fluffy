import type { FC, HTMLAttributes } from 'react'

export const SkeletonVariants = {
    Light: 'light' as const,
    Dark: 'dark' as const
}

export type SkeletonVariantsType = typeof SkeletonVariants
export type SkeletonVariantType = SkeletonVariantsType[keyof SkeletonVariantsType]

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    rows?: number,
    rtl?: boolean,
    rowHeight?: number,
    variant?: SkeletonVariantType
}

export type SkeletonComponent = FC<SkeletonProps>