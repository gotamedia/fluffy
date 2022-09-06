import type { DefaultTheme, CSSObject } from 'styled-components'

export type ThemeStyleObject = CSSObject
export type ThemeStyleFunction = (props: {
    theme: DefaultTheme,
    $componentState?: Record<string, unknown>
}) => ThemeStyleObject

export type ThemeStyleItem = ThemeStyleObject | ThemeStyleFunction