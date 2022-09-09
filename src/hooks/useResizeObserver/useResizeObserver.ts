import { useCallback, useEffect, useState } from "react"

const useResizeObserver = <T extends HTMLElement>() => {
    const [target, setTarget] = useState<T | null>(null)
    const [dimensions, setDimensions] = useState<DOMRectReadOnly | null>(null)

    const ref = useCallback((node: T | null) => { setTarget(node) }, [])

    useEffect(() => {
        if (target) {
            const resizeObserver = new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    setDimensions(entry.contentRect)
                })
            })

            resizeObserver.observe(target)

            return () => {
                resizeObserver.disconnect()
            }
        }
    }, [target])

    return [ref, dimensions] as const
}

export default useResizeObserver
