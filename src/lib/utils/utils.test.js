describe('utils', () => {
    const OLD_ENV = process.env

    beforeEach(() => {
        jest.resetModules() // Most important - it clears the cache
        process.env = { ...OLD_ENV } // Make a copy
    })

    afterAll(() => {
        process.env = OLD_ENV // Restore old environment
    })

    describe('isProduction.js', () => {
        it('should be false if NODE_ENV is development', () => {
            process.env.NODE_ENV = 'development'
            const isProduction = require('./isProduction').default

            expect(isProduction).toEqual(false)
        })

        it('should be true if NODE_ENV is production', () => {
            process.env.NODE_ENV = 'production'
            const isProduction = require('./isProduction').default

            expect(isProduction).toEqual(true)
        })
    })

    describe('isClient.js', () => {
        let windowSpy

        beforeEach(() => {
            windowSpy = jest.spyOn(window, 'window', 'get');
        })

        afterEach(() => {
            windowSpy.mockRestore()
        })

        it('should be true if window exists.', () => {
            const isClient = require('./isClient').default

            expect(isClient()).toEqual(true)
        })

        it('should be false if window is undefined.', () => {
            windowSpy.mockImplementation(() => undefined)
            const isClient = require('./isClient').default

            expect(isClient()).toEqual(false)
        })
    })
})