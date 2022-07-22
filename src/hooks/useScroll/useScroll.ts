import { useCallback } from 'react'

import * as Types from './types'

const useScroll: Types.UseScroll = (props) => {
    const {
        element,
        behavior = 'smooth'
    } = props || {}

    const scroll = useCallback((params: Types.ScrollParams) => {
        const {
            position = {},
            direction = 'bottom'
        } = params

        const options = {
            ...position,
            behavior: behavior
        } as any
        
        const scrollElement = element || window
        const calculateElement = element || document.documentElement

        if (!position.top && !position.left) {
            switch(direction) {
                case 'top':
                    options.top = 0
                    break

                case 'right':
                    options.left = calculateElement.scrollWidth
                    break
                
                case 'bottom':
                    options.top =  calculateElement.scrollHeight
                    break
                
                case 'left':
                    options.left = 0
                    break
            }
        }

        scrollElement.scrollTo(options)
    }, [behavior, element])

    return scroll
}

export default useScroll