import {
    forwardRef,
    useMemo
} from 'react'

import { ThemeProvider } from 'styled-components'
import merge from 'lodash/merge'

import useComponentThemeProps from '@internal/hooks/useComponentThemeProps'

import useTheme from '@hooks/useTheme'

import type {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes
} from 'react'
import type { FluffyTheme } from '@utils/theme'

type ComponentType<Ref, Props> = ForwardRefExoticComponent<
    PropsWithoutRef<Props> &
    RefAttributes<Ref>
>

const withThemeProps = <Ref, Props extends {}>(
    WrappedComponent: ComponentType<Ref, Props>
): ComponentType<Ref, Props> => {
    const Component = forwardRef<Ref, Props>((props, ref) => {
        const theme = useTheme()
        
        const {
            defaultProps,
            components
        } = useComponentThemeProps(theme, WrappedComponent.displayName as keyof FluffyTheme['components'])

        const extendedTheme = useMemo(() => {
            return merge({}, theme, { components: components })
        }, [theme, components])

        return (
            <ThemeProvider theme={extendedTheme}>
                <WrappedComponent
                    ref={ref}
                    {...defaultProps}
                    {...props as PropsWithoutRef<Props>}
                />
            </ThemeProvider>
        )
    })
    
    Component.displayName = WrappedComponent.displayName || 'Component'

    return Component
}

export default withThemeProps