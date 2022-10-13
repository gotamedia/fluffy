import getObject from 'lodash/get'

import type { ThemeStyleObject } from '@root/types'
import type { FluffyTheme } from '@utils/theme'

export type ComponentThemeItem = {
    style?: Record<string, ThemeStyleObject>,
    sizes?: Record<string, ThemeStyleObject>,
    variants?: Record<string, ThemeStyleObject>
}

export type GetComponentTheme = (
    name: keyof FluffyTheme['components'],
    property: string,
    props?: {
        theme: FluffyTheme,
        $componentState?: Record<string, any>
    }
) => Record<string, ThemeStyleObject> | undefined

const getComponentTheme: GetComponentTheme = (name, property, props) => {
    if (props?.theme) {
        const componentTheme = props.theme.components[name]
        
        if (componentTheme) {
            const themeObject = getObject(componentTheme, property)

            if (themeObject) {
                if (typeof themeObject === 'function') {
                    return themeObject(props)
                } else {
                    return themeObject
                }
            }
        }
    }

    return undefined
}

export default getComponentTheme