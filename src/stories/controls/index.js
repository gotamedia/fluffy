import cssProperties from './cssProperties'
import ssPropTypes from '@styled-system/prop-types'

const isColor = key => ['bg', 'color', 'backgroundColor'].includes(key)
const isRange = key => ['opacity', ].includes(key)
const isLonghand = key => [
    'backgroundColor',
    'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom', 'marginY', 'marginX',
    'padding', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom', 'paddingY', 'paddingX',
].includes(key)

const getNamespace = key => {
    let namespace

    Object.keys(ssPropTypes).map(ssPropType => {
        if (ssPropTypes[ssPropType][key] != undefined) {
            namespace = ssPropType
        }
    })

    return namespace

}

export const getArgTypes = ({
    theme,
    propTypes,
    defaultProps,
    exclude = []
}) => {
    let argTypes = {}

    const shouldAdd = key => !exclude.includes(key)

    Object.keys(propTypes).map(propTypeKey => {
        if (isLonghand(propTypeKey)) {
            return
        }

        const nameSpace = getNamespace(propTypeKey)

        const foo = (prop) => {
            let options
            let control = { type: 'text' }
            let labels = {}
            let defaultValue

            if (isRange(propTypeKey)) {
                control = { type: 'range', min: 0, max: 1, step: 0.1 }
                defaultValue = 1

            } else if (prop === 'layout') {
                if (cssProperties.hasOwnProperty(propTypeKey)) {
                    console.log("CSS PROPERTIES", cssProperties[propTypeKey])
                    control = { type: 'select' }
                    options = cssProperties[propTypeKey]
                } else {
                    control = { type: 'range', min: 0, max: 3000, step: 1 }
                    defaultValue = 'none'
                }
            } else {
                if (typeof theme[prop] === "object") {
                    let entries = Object.entries(theme[prop])

                    options = entries.map(entry => {
                        labels = {
                            ...labels,
                            [entry[0]]: entry[1]
                        }

                        return entry[0]
                    })

                    if (isColor(propTypeKey)) {
                        control = {
                            type: 'color'
                        }

                    } else {
                        control = {
                            type: 'select'
                        }

                        defaultValue = defaultProps[propTypeKey]
                    }
                } else {
                    //console.log("not supported", prop, propTypeKey)

                    return false
                }
            }

            let argTypesObj = {
                options,
                labels,
                control,
                defaultValue
            }

            if (shouldAdd(propTypeKey)) {
                argTypes[propTypeKey] = argTypesObj
            }

            return true
        }

        if (!foo(nameSpace)) {
            foo(`${nameSpace}s`)
        }

    })

    return argTypes
}