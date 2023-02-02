import type { DefaultTheme, InterpolationFunction, ThemedStyledProps } from "styled-components"

type StyledInterpolationFunction<P> = InterpolationFunction<P & ThemedStyledProps<P,  DefaultTheme>>

export type { StyledInterpolationFunction }
