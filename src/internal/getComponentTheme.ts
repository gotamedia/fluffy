import getObject from 'lodash/get'

import type { ThemeStyleObject } from '@root/types'
import type { DefaultTheme } from 'styled-components'

export type ComponentThemeItem = {
    style?: Record<string, ThemeStyleObject>,
    sizes?: Record<string, ThemeStyleObject>,
    variants?: Record<string, ThemeStyleObject>
}

export type GetComponentTheme = (
    name: keyof DefaultTheme['components'],
    property: string,
    props: {
        theme: DefaultTheme,
        $componentState?: Record<string, unknown>
    }
) => Record<string, ThemeStyleObject> | undefined

const getComponentTheme: GetComponentTheme = (name, property, props) => {
    if (props.theme) {
        const componentTheme = props.theme.components[name]
        
        if (componentTheme) {
            const themeObject = getObject(componentTheme, property)

            if (themeObject) {
                let style = themeObject
    
                Object.entries(themeObject).forEach(([key, value]) => {
                    style[key] = typeof value === 'function' ? value(props) : value
                })
                
                return style as Record<string, ThemeStyleObject>
            }
        }
    }

    return undefined
}

export default getComponentTheme