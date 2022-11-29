import useEventListener from '@hooks/useEventListener'
import { useCallback } from 'react'
import * as Types from './types'

const useOutsideClick: Types.UseOutsideClick = (
    target,
    handler
) => {

    const onEvent: Types.Handler = useCallback((event) => {
        const targetElement = target?.current
        const clickedElement = event?.target

        if (targetElement && targetElement !== clickedElement && !targetElement.contains(clickedElement as Node)) {
            handler(event)
        }

    }, [handler, target])

    useEventListener('mousedown', onEvent)
    useEventListener('touchend', onEvent)
}


export default useOutsideClick
