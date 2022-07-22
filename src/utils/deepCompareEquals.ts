import isEqual from 'lodash/isEqual'

const deepCompareEquals = <Type = unknown>(value1: Type, value2: Type) => {
    let isEqualValue = false

    if (typeof value1 === 'function' || value1 instanceof HTMLElement) {
        isEqualValue = value1 === value2
    } else {
        isEqualValue = isEqual(value1, value2)
    }

    return isEqualValue
}

export default deepCompareEquals