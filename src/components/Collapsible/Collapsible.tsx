import { forwardRef, useRef } from "react"

import useAnimation from "@hooks/useAnimation"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"

import * as Styled from "./style"
import type * as Types from "./types"
import useMeasure from "@root/hooks/useMeasure"

const Collapsible: Types.CollapsibleComponent = forwardRef(({
    open,
    children,
    ...rest
}, ref) => {
    const { heightTransition } = useAnimation()
    const initialValue = useRef<boolean | undefined | null>(open)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const { rect: observeElementRect } = useMeasure(contentRef.current)
    const trackFromHeight = useRef(0)

    const observeElementHeight = observeElementRect.height

    useIsomorphicLayoutEffect(() => {
        const wrapperElement = wrapperRef.current
        const isOpenValid = typeof open === "boolean"
        const openOnMount = isOpenValid && open && initialValue.current
        const shouldRunAnimation = openOnMount || (isOpenValid && initialValue.current === null)

        if (wrapperElement && observeElementHeight && shouldRunAnimation) {
            const from = open ? trackFromHeight.current : observeElementHeight
            const to = open ? observeElementHeight : 0
            trackFromHeight.current = to
            heightTransition({ element: wrapperElement, from, to })
        }
        if (initialValue.current !== null) {
            initialValue.current = null
        }
    }, [heightTransition, open, observeElementHeight])

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
