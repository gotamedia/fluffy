import { forwardRef, useRef } from "react"

import useAnimation from "@hooks/useAnimation"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"

import * as Styled from "./style"
import * as Types from "./types"

const Collapsible: Types.Collapsible = forwardRef(({ 
    open,
    children,
    ...rest
}, ref) => {
    const { heightTransition } = useAnimation()
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (wrapperRef.current && contentRef.current && typeof open === "boolean") {
            const contentHeight = contentRef.current.getBoundingClientRect().height
            const element = wrapperRef.current
            const to = open ? contentHeight : 0
            const from = open ? 0 : contentHeight
            heightTransition({ element, to, from })
        }
    }, [heightTransition, open])

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
