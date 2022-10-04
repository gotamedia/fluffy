enum WaitTypes {
    Reject = 'REJECT',
    Resolve = 'Reolve'
}

const wait = (time: number, type = WaitTypes.Resolve) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (type) {
                case WaitTypes.Reject:
                    reject({ error: 'timeout' })
                    break

                case WaitTypes.Resolve:
                default:
                    resolve(undefined)
            }
        }, time)
    })
)

export {
    WaitTypes
}

export default wait