import { DefaultTheme } from "styled-components"

type Prefix<Props, Value extends string> = {
    [Property in keyof Props as `${Value}${string & Property}`]: Props[Property]
}

/**
 @example
```
interface Example {
	theme: {}
	size: "small" | "big"
}

interface ExampleStyledProps {
	$theme: {}
	$size: "small" | "big"
}
```
*/
type StyledPrefixProps<Props> = Prefix<Props, "$">

/**
 @example
```
interface Example {
	size: "small" | "big"
}

interface ExampleStyledProps {
	$size: "small" | "big"
	theme: DefaultTheme
}
```
*/
type StyledPrefixThemeProps<Props> = Prefix<Props, "$"> & { theme: DefaultTheme }

export type {
	Prefix,
	StyledPrefixProps,
	StyledPrefixThemeProps
}