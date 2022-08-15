import { forwardRef, useRef, useState, useCallback } from "react"

import useRect from "@root/hooks/useRect"
import useIsomorphicLayoutEffect from "@root/hooks/useIsomorphicLayoutEffect"

import * as Styled from "./style"
import * as Types from "./types"

const Collapsible: Types.Collapsible = forwardRef(({ open, children, ...rest }, ref) => {
	const [renderChildren, setRenderChildren] = useState<boolean>()
	const wrapperRef = useRef<HTMLDivElement>(null)
	const childrenWrapperRef = useRef<HTMLDivElement>(null)
	const wrapperHeight = useRect(wrapperRef)?.height
	const childrenWrapperHeight = useRect(childrenWrapperRef)?.height

	const fireHeightTransition = useCallback((height: number) => {
		if (wrapperRef.current) {
			wrapperRef.current.style.height = height + "px"
		}
	}, [])

	useIsomorphicLayoutEffect(() => {
		if (renderChildren) {
			if (open && childrenWrapperHeight) {
				fireHeightTransition(childrenWrapperHeight)
			} else if (open === false) {
				fireHeightTransition(0)
			}
		}
	}, [open, renderChildren, childrenWrapperHeight, fireHeightTransition])

	useIsomorphicLayoutEffect(() => {
		if (open) {
			setRenderChildren(true)
		}
		if (open === false) {
			const heightTransitionFinish = wrapperHeight === 0
			if (heightTransitionFinish) {
				setRenderChildren(false)
			}
		}
	}, [open, wrapperHeight])

	return (
		<Styled.Container ref={ref} {...rest}>
			<Styled.Wrapper ref={wrapperRef}>
				<Styled.InnerWrapper>
					<Styled.ChildrenWrapper ref={childrenWrapperRef}>
						{renderChildren ? children : null}
					</Styled.ChildrenWrapper>
				</Styled.InnerWrapper>
			</Styled.Wrapper>
		</Styled.Container>
	)
})

Collapsible.displayName = "Collapsible"

export default Collapsible
