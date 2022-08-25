import { animate, toDecimal } from "popmotion"
import { useCallback } from "react"

import * as Types from "./types"

const useAnimation = () => {
    const heightTransition: Types.HeightTransitionCallback = useCallback(({element, from, to }) => {
        animate({
            from,
            to,
            duration: 300,
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
