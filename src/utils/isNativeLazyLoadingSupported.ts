import environment from './environment'

let isNativeLazyLoadingSupported: boolean | undefined

if (typeof isNativeLazyLoadingSupported === 'undefined') {
    if (environment.isClient) {
        isNativeLazyLoadingSupported = 'loading' in HTMLImageElement.prototype
    }
}

export default isNativeLazyLoadingSupported