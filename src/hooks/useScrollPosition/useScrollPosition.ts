import useEventListener from '@hooks/useEventListener'
import { useCallback, useRef, useState } from 'react'
import * as Types from './types'

const useScrollPosition: Types.UseScrollPosition = () => {
    const [position, setPosition] = useState({ scrollX: 0, scrollY: 0 })
    const prevPosition = useRef(position)

    const onEvent = useCallback(() => {
        const { scrollX , scrollY  } = window
        const { scrollX: prevX ,  scrollY: prevY  } = prevPosition.current

        if (prevX !== scrollX || prevY !== scrollY) {
            const newPosition = { scrollX,  scrollY }

            prevPosition.current = newPosition
            setPosition(newPosition)
        }
    }, [])

    useEventListener('scroll', onEvent)

    return position
}


export default useScrollPosition
