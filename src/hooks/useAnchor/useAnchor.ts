import {
    useCallback,
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
        offset,
        withPointer,
        forceDirection
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
        maxHeight: 10000,
        pointer: {
            canExtendRight: false,
            canExtendLeft: false,
            canExtendTop: false,
            canExtendBottom: false
        }
    })

    const calculateRect = useCallback(() => {
        let rectData = defaultRect.current

        const anchorElement = anchor || document.body

        if (anchored && anchorElement) {
            const anchorRect = anchorElement.getBoundingClientRect()
            const anchoredRect = anchored.getBoundingClientRect()

            const calculatedRect = {
                top: anchorRect.bottom + offsetValue.y,
                left: anchorRect.left + offsetValue.x,
                width: (anchorRect.width < anchoredRect.width ? anchoredRect.width : anchorRect.width),
                maxHeight: 10000,
                pointer: {
                    canExtendRight: false,
                    canExtendLeft: false,
                    canExtendTop: false,
                    canExtendBottom: false
                }
            } as Types.AnchorRect

            if (anchorRect.left + offsetValue.x + calculatedRect.width <= viewWidth) {
                // Anchored can extend to the right
                calculatedRect.left = anchorRect.left + offsetValue.x
                calculatedRect.pointer.canExtendRight = withPointer && true
            } else if (anchorRect.right - calculatedRect.width - offsetValue.x >= CALCULATION_PADDING) {
                // Anchored can extend to the left
                calculatedRect.left = anchorRect.right - calculatedRect.width + (-1 * offsetValue.x)
                calculatedRect.pointer.canExtendLeft = withPointer && true
            } else if (viewWidth - calculatedRect.width < 0) {
                // Anchored is wider than the viewWidth
                calculatedRect.left = 0
                calculatedRect.pointer.canExtendLeft = withPointer && true
            } else {
                // Anchored fits only within the viewWidth
                calculatedRect.left = viewWidth - calculatedRect.width
                calculatedRect.pointer.canExtendLeft = withPointer && true
            }

            const startBottom = anchorRect.bottom + offsetValue.y
            const startTop = anchorRect.top - offsetValue.y

            const availableBottomSpace = Math.max(viewHeight - startBottom - CALCULATION_PADDING, CALCULATION_PADDING)
            const availableTopSpace = Math.max(startTop - CALCULATION_PADDING, CALCULATION_PADDING)

            if (!forceDirection && availableTopSpace > availableBottomSpace) {
                calculatedRect.top = undefined
                calculatedRect.bottom = (windowSize.height - anchorRect.top) + offsetValue.y
                calculatedRect.maxHeight = availableTopSpace
                calculatedRect.pointer.canExtendTop = withPointer && true
            } else {
                calculatedRect.top = anchorRect.bottom + offsetValue.y
                calculatedRect.maxHeight = availableBottomSpace
                calculatedRect.pointer.canExtendBottom = withPointer && true
            }

            rectData = calculatedRect
        }

        return rectData
    }, [
        anchor,
        anchored,
        forceDirection,
        offsetValue.x,
        offsetValue.y,
        windowSize.height,
        viewHeight,
        viewWidth,
        withPointer
    ])

    const [rect, setRect] = useState<Types.AnchorRect>(calculateRect)

    useIsomorphicLayoutEffect(() => {
        setRect(calculateRect())
    }, [calculateRect])

    return rect
}

export default useAnchor
