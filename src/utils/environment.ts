const isClient = typeof document === 'undefined' ? false : true

const isServer = !isClient

export default {
    isClient,
    isServer
}