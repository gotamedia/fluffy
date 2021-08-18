import isProduction from './isProduction'

const log = {
    message: props => !isProduction && console.log(props),
    warning: props => !isProduction && console.warn(props),
    error: props => !isProduction && console.error(props)
}

export default log
