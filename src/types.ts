import type { DefaultTheme, CSSObject } from 'styled-components'

export type ThemeStyleObject = CSSObject

export type ThemeStyleFunction<Type = ThemeStyleObject> = (props: {
    theme: DefaultTheme,
    $componentState?: Record<string, unknown>
}) => Type

export type ThemeStyleItem<Type = ThemeStyleObject> = ThemeStyleObject | ThemeStyleFunction<Type>