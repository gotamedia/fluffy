import useTheme from '../hooks/useTheme'
import isClient from '../utils/isClient'

const getParamValue = (key, params) => (
    params.map(param => {
        const pair = param.split("=")

        return key === pair[0] ? pair[1] : null
    }).filter(match => match)[0]
)

const getParams = url => {
    const split = url.split("?")

    if (split) {
        return split[1] ? split[1].split('&') : []
    }

    return []
}

const setImageUrlParams = (url, { width, height, quality }) => {
    if (url.indexOf("imengine") === -1) {
        return url
    }

    const currentParams = getParams(url)

    const modifiedParams = currentParams.reduce((params, param) => {
        const pair = param.split("=")

        if (pair[0] === "q" && quality) {
            const currentQuality = Number(getParamValue("q", currentParams))

            if (currentQuality) {
                return [...params, `q=${quality}`]
            }
        } else if (pair[0] === "width" || pair[0] === "height") {
            const currentWidth = Number(getParamValue("width", currentParams))
            const currentHeight = Number(getParamValue("height", currentParams))

            if (pair[0] === "width") {
                if (!width && currentWidth) {
                    // eslint-disable-next-line no-param-reassign
                    width = Math.floor((currentWidth / currentHeight) * height)
                }
                return width ? [...params, `width=${width}`] : params
            }

            if (pair[0] === "height") {
                if (!height && currentHeight) {
                    // eslint-disable-next-line no-param-reassign
                    height = Math.floor((currentHeight / currentWidth) * width)
                }
                return height ? [...params, `height=${height}`] : params
            }
        }

        return [...params, param]
    }, [])

    return `${url.split("?")[0]}?${modifiedParams.join("&")}`
}

const getBreakpoints = (url, min) => {
    const currentParams = getParams(url)
    const currentWidth = Number(getParamValue("width", currentParams))
    const currentHeight = Number(getParamValue("height", currentParams))
    const minNumber = min || 300
    const diff = currentWidth - minNumber
    const steps = Math.floor(currentWidth / minNumber)

    return Array(10).fill(Math.floor(diff / steps)).reverse().map((x, y) => {
        const newWidth = x * (y + 1)
        const newHeight = (currentHeight / currentWidth) * newWidth
        return { width: newWidth, height: newHeight, w: `${newWidth}w` }
    })
}

const imageSrcSet = (url, breakpoints) => (
    breakpoints.reduce((srcSet, props, index) => (
        `${srcSet}${index > 0 ? ", " : ""}${setImageUrlParams(url, props)} ${props.w}`
    ), "")
)

const imageSizes = (widths, breakpoints) => {
    // eslint-disable-next-line no-nested-ternary
    const widthsAsArray = widths ? widths.constructor === String ? [widths] : widths : []
    const defaultValue = widthsAsArray.shift()

    if (!widthsAsArray.length) {
        return defaultValue || "50vw"
    }

    return `${[breakpoints.tablet, breakpoints.desktop]
        .reduce((sizes, value, index) => {
            const width = widthsAsArray[index]

            return width ? `${sizes}${index > 0 ? ", " : ""}(min-width: ${value * (isClient() ? window.devicePixelRatio : 1)}px) ${width}` : sizes
        }, "")}, ${defaultValue}`
}

const useImage = (url, props) => {
    const theme = useTheme()

    return {
        url: setImageUrlParams(url, props),
        srcSet: imageSrcSet(url, getBreakpoints(url)),
        sizes: imageSizes(url, theme.breakpoints)
    }
}

export default useImage