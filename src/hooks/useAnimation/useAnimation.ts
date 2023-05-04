import { animate, toDecimal } from "popmotion"
import { useCallback } from "react"

import * as Types from "./types"

const useAnimation = () => {
    const heightTransition: Types.HeightTransitionCallback = useCallback((params) => {
        const {
            element,
            from,
            to,
            onComplete
        } = params

        animate({
            from,
            to,
            duration: 300,
            onComplete: onComplete,
            onUpdate: (latest) => {
                if (element) {
                    element.style.height = `${toDecimal(latest)}px`
                }
            },
        })
    }, [])

    return { heightTransition }
}

export default useAnimation
