import { useEffect, useState } from "react"
import type * as Types from './types'

const usePrevious: Types.usePrevious = (currentState) => {
    const [state, setState] = useState(currentState)

    useEffect(() => {
        setState(currentState)
    }, [currentState])

    return state
}

export default usePrevious
