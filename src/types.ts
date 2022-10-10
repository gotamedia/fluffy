import type { DefaultTheme, CSSObject } from 'styled-components'

import type { FluffyTheme } from './utils/theme'
import type { DeepPartial } from './types/utils'

export type ThemeStyleObject = CSSObject

export type ThemeStyleFunction<Type = ThemeStyleObject> = (props: Record<string, any> & {
    theme: DefaultTheme,
    $componentState?: Record<string, any>
}) => Type

export type ThemeStyleItem<Type = ThemeStyleObject> = (
    ThemeStyleObject |
    ThemeStyleFunction<Type>
)

export type ComponentTheme<T = {}> = T & {
    components?: DeepPartial<FluffyTheme['components']>
}