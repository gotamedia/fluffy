import {
    forwardRef,
    Children,
    useCallback,
    useEffect
} from 'react'

import { useInView } from 'react-intersection-observer'

import type * as Types from './types'

const LazyLoad: Types.LazyLoadComponent = forwardRef((props, ref) => {
    const {
        children,
        onLoaded,
        observerOptions = {},
        ...filteredProps
    } = props

    const [inViewRef, isInView] = useInView(observerOptions)

    const handleRef = useCallback((node: HTMLDivElement | null) => {
        inViewRef(node)
        
        if (ref) {
            if (typeof ref === 'function') {
                ref(node)
            } else {
                ref.current = node
            }
        }
    }, [inViewRef, ref])

    useEffect(() => {
        if (typeof onLoaded === 'function' && isInView) {
            onLoaded()
        }
    }, [onLoaded, isInView])

    return (
        <div
            ref={handleRef}
            {...filteredProps}
        >
            {
                isInView ? (
                    Children.only(children)
                ) : (
                    null
                )
            }
        </div>
    )
})

LazyLoad.displayName = 'LazyLoad'

export default LazyLoad