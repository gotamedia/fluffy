import {
    useRef,
    useState,
    useCallback
} from 'react'

import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect'

import type * as Types from './types'

const defaultRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

const useMeasure: Types.UseMeasure = (target) => {
    const observerRef = useRef<ResizeObserver>()

    const [rect, setRect] = useState<Types.UseMeasureRect>(() => {
        if (target) {
            return target.getBoundingClientRect()
        } else {
            return defaultRect
        }
    })

    const handleOnResize = useCallback((entries: ResizeObserverEntry[]) => {
        requestAnimationFrame(() => {
            if (Array.isArray(entries) && entries.length) {
                if (entries[0]) {
                    setRect(entries[0].contentRect)
                }
            }
        })
    }, [])

    useIsomorphicLayoutEffect(() => {
        let observer = observerRef.current

        if (target) {
            if (!observer) {
                observerRef.current = new ResizeObserver(handleOnResize)
                observer = observerRef.current
            }

            observer.observe(target)
        }

        return () => {
            observer?.disconnect()
        }
    }, [target, handleOnResize])

    const handleRevalidate = useCallback(() => {
        if (target) {
            setRect(() => target.getBoundingClientRect())
        }
    }, [target])

    return {
        rect: rect,
        revalidate: handleRevalidate
    }
}

export default useMeasure