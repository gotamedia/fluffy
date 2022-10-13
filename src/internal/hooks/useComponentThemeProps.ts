import { useMemo } from 'react'

import type { FluffyTheme } from '@utils/theme'

const useComponentThemeProps = (theme: FluffyTheme, name: keyof FluffyTheme['components']) => {
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