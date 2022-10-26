import environment from '@utils/environment'

const _getScriptDataConfig = (data?: Record<string, any>) => {
    let stringifiedScriptDataConfig = ''

    if (data) {
        try {
            stringifiedScriptDataConfig = JSON.stringify(data)
        } catch (error) {
            // ignore error
        }
    }

    return stringifiedScriptDataConfig
}

const _getScriptAttributes = (attributes?: Record<string, any>) => {
    const stringifiedScriptAttributes: string[] = []
    
    const attributesObject = {
        className: 'yp',
        type: 'text/javascript',
        ...attributes
    }

    Object.entries(attributesObject).forEach(([key, value]) => {
        stringifiedScriptAttributes.push(`${key}='${value}'`)
    })

    return stringifiedScriptAttributes.join(' ')
}

const initiateBySrc = (src: string, config?: Record<string, any>) => {
    if (environment.isClient) {
        const scriptDataConfig = _getScriptDataConfig(config?.data)
        const scriptAttributes = _getScriptAttributes(config?.attributes)

        const script = `
            <script
                async
                defer
                ${scriptAttributes}
                src='http://delivery.youplay.se/load.js?id=${src}'
                data-config='${scriptDataConfig || '{}'}'
            />
        `
        
        const playerScript = document.createRange().createContextualFragment(script)

        return playerScript
    }
}

const initiateByScript = (config: Record<string, any>) => {
    if (environment.isClient) {
        const playerScript = document.createRange().createContextualFragment(config.script)

        return playerScript
    }
}

const ShowHeros = {
    initiateBySrc: initiateBySrc,
    initiateByScript: initiateByScript
}

export default ShowHeros