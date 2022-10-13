import type { CSSObject } from 'styled-components'

import type { FluffyTheme } from './utils/theme'

export type ThemeStyleObject = CSSObject

export type ThemeStyleFunction<Type = ThemeStyleObject> = (props: Record<string, any> & {
    theme: FluffyTheme,
    $componentState?: Record<string, any>
}) => Type

export type ThemeStyleItem<Type = ThemeStyleObject> = (
    ThemeStyleObject |
    ThemeStyleFunction<Type>
)

export type ComponentTheme<T = {}> = T & {
    components?: FluffyTheme['components']
}