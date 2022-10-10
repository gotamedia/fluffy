import { useMemo } from 'react'

import type { DefaultTheme } from 'styled-components'

const useComponentThemeProps = (theme: DefaultTheme, name: keyof DefaultTheme['components']) => {
    const themeProps = useMemo(() => {
        const props = {
            defaultProps: {},
            components: {}
        }

        if (theme) {
            const componentTheme = theme.components[name]
            
            props.defaultProps = componentTheme.defaultProps
            props.components = componentTheme.components || {}
        }

        return props
    }, [theme, name])

    return themeProps
}

export default useComponentThemeProps