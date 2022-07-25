import replaceAll from "@utils/replaceAll"

const sprintf = (text: string, variables: { [key: string]: string }) => {
    return Object.keys(variables).reduce((result, key) => {
        return replaceAll(result, "${" + key + "}", variables[key])
    }, text)
}

export default sprintf
