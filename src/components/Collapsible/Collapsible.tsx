import { forwardRef, useRef } from "react"

import useAnimation from "@hooks/useAnimation"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"
import useResizeObserver from "@hooks/useResizeObserver"

import * as Styled from "./style"
import * as Types from "./types"

const Collapsible: Types.CollapsibleComponent = forwardRef(({
    open,
    children,
    ...rest
}, ref) => {
    const { heightTransition } = useAnimation()
    const initialValue = useRef<boolean | undefined | null>(open)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [contentRef, diminsions] = useResizeObserver<HTMLDivElement>()

    useIsomorphicLayoutEffect(() => {
        const isOpenValid = typeof open === "boolean"
        const openOnMount = isOpenValid && open && initialValue.current
        const shouldRunAnimation = openOnMount || (isOpenValid && initialValue.current === null)
        if (wrapperRef.current && diminsions?.height && shouldRunAnimation) {
            const contentHeight = diminsions.height
            const element = wrapperRef.current
            const to = open ? contentHeight : 0
            const from = open ? 0 : contentHeight
            heightTransition({ element, to, from })
        }
        if (initialValue.current !== null) {
            initialValue.current = null
        }
    }, [heightTransition, open, diminsions])

    return (
        <Styled.Container ref={ref} {...rest}>
            <Styled.Wrapper ref={wrapperRef}>
                <Styled.ContentWrapper ref={contentRef}>{children}</Styled.ContentWrapper>
            </Styled.Wrapper>
        </Styled.Container>
    )
})

Collapsible.displayName = "Collapsible"

export default Collapsible
