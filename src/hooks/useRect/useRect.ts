import ResizeObserver from "resize-observer-polyfill"
import { RefObject, useEffect, useRef, useState } from "react"

const useRect = (ref: RefObject<HTMLElement>): DOMRect | undefined => {
	const [domRect, setDomRect] = useState<DOMRect>()
	const animationFrameRequestRef = useRef<number>()

	useEffect(() => {
		const resizeObserver: ResizeObserver = new ResizeObserver(
			(entries: ReadonlyArray<ResizeObserverEntry>) => {
				animationFrameRequestRef.current = requestAnimationFrame(() =>
					setDomRect(entries?.[0]?.target?.getBoundingClientRect())
				)
			}
		)
		if (ref.current) {
			resizeObserver.observe(ref.current)
		}

		return () => {
			resizeObserver.disconnect()
			if (animationFrameRequestRef.current) {
				cancelAnimationFrame(animationFrameRequestRef.current)
			}
		}
	}, [ref])

	return domRect
}

export default useRect
