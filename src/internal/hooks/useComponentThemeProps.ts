import { useMemo } from 'react'

import useTheme from '@hooks/useTheme'

import type { DefaultTheme } from 'styled-components'

const useComponentThemeProps = (name: keyof DefaultTheme['components']) => {
    const theme = useTheme()

    const themeProps = useMemo(() => {
        if (theme) {
            const componentTheme = theme.components[name]
            
            // @ts-ignore
            if (componentTheme?.defaultProps) {
                // @ts-ignore
                return componentTheme.defaultProps
            }
        }

        return {}
    }, [theme, name])

    return themeProps
}

export default useComponentThemeProps