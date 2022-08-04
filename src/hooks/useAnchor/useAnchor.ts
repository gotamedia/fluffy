import {
    useRef,
    useState
} from 'react'

import useWindowSize from '@hooks/useWindowSize'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import type * as Types from './types'

const CALCULATION_PADDING = 20

const useAnchor: Types.UseAnchor = (props) => {
    const {
        anchor,
        anchored,
        padding,
        offset
    } = props

    const paddingValue = typeof padding === 'number' ? padding : 0

    const offsetValue = {
        x: typeof offset?.x === 'number' ? offset.x : 0,
        y: typeof offset?.y === 'number' ? offset.y : 0
    }

    const windowSize = useWindowSize()

    const viewWidth = windowSize.width - paddingValue
    const viewHeight = windowSize.height - paddingValue

    const defaultRect = useRef<Types.AnchorRect>({
        top: 0,
        left: 0,
        width: viewWidth,
        height: viewHeight
    })

    const [rect, setRect] = useState<Types.AnchorRect>(defaultRect.current)

    useIsomorphicLayoutEffect(() => {
        let rectData = defaultRect.current

        const anchorElement = anchor || document.body

        if (anchored && anchorElement) {
            const anchorRect = anchorElement.getBoundingClientRect()
            const anchoredRect = anchored.getBoundingClientRect()

            const calculatedRect = {
                top: anchorRect.bottom,
                left: anchorRect.left,
                width: (anchorRect.width < anchoredRect.width ? anchoredRect.width : anchorRect.width),
                height: anchoredRect.height || null
            }

            if (anchorRect.left + offsetValue.x + calculatedRect.width <= viewWidth) {
                calculatedRect.left = anchorRect.left + offsetValue.x
            } else if (anchorRect.right - calculatedRect.width + (-1 * offsetValue.x) >= CALCULATION_PADDING) {
                calculatedRect.left = anchorRect.right - calculatedRect.width + (-1 * offsetValue.x) 
            } else if (viewWidth - calculatedRect.width < 0) {
                calculatedRect.left = 0
            } else {
                calculatedRect.left = viewWidth - calculatedRect.width
            }
    
            if (anchorRect.bottom + offsetValue.y + anchoredRect.height < viewHeight) {
                calculatedRect.top = anchorRect.bottom + offsetValue.y
            } else if (anchorRect.top - anchoredRect.height - offsetValue.y >= CALCULATION_PADDING) {
                calculatedRect.top = anchorRect.top - anchoredRect.height - offsetValue.y
            } else if (anchorRect.top - CALCULATION_PADDING > Math.abs(viewHeight - anchorRect.bottom)) {
                calculatedRect.top = CALCULATION_PADDING
                calculatedRect.height = anchorRect.top - CALCULATION_PADDING - offsetValue.y
            } else {
                calculatedRect.top = anchorRect.bottom + offsetValue.y
                calculatedRect.height = Math.abs(viewHeight - calculatedRect.top)
            }
            
            rectData = calculatedRect
        }

        setRect(rectData)
    }, [
        anchor,
        anchored,
        offsetValue.x,
        offsetValue.y,
        padding,
        viewHeight,
        viewWidth
    ])

    return rect
}

export default useAnchor