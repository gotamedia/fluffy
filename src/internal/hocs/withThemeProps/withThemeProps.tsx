import { forwardRef } from 'react'

import useComponentThemeProps from '@internal/hooks/useComponentThemeProps'

import type {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes
} from 'react'

import type { DefaultTheme } from 'styled-components'

type ComponentType<Ref, Props> = ForwardRefExoticComponent<
    PropsWithoutRef<Props> &
    RefAttributes<Ref>
>

const withThemeProps = <Ref, Props extends {}>(
    WrappedComponent: ComponentType<Ref, Props>
): ComponentType<Ref, Props> => {
    const WithThemeProps = forwardRef<Ref, Props>((props, ref) => {
        const themeProps = useComponentThemeProps(WrappedComponent.displayName as keyof DefaultTheme['components'])
        
        return (
            <WrappedComponent
                ref={ref}
                {...themeProps}
                {...props as PropsWithoutRef<Props>}
            />
        )
    })

    const displayName = WrappedComponent.displayName || 'Component'
    
    WithThemeProps.displayName = `WithThemeProps(${displayName})`

    return WithThemeProps
}

export default withThemeProps