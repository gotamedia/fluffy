import useEventListener from '@hooks/useEventListener'
import { useCallback } from 'react'
import * as Types from './types'

const useOutsideClick: Types.UseOutsideClick = (
    target,
    handler
) => {

    const onEvent = useCallback((event: Event) => {
        const targetElement = target
        const clickedElement = event?.target

        if (targetElement && targetElement !== clickedElement && !targetElement.contains(clickedElement as Node)) {
            handler(event as MouseEvent)
        }

    }, [handler, target])

    useEventListener('mousedown', onEvent)
    useEventListener('touchend', onEvent)
}


export default useOutsideClick
