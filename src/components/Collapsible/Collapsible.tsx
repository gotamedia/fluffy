import { forwardRef, useRef } from "react"

import useAnimation from "@hooks/useAnimation"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"

import * as Styled from "./style"
import * as Types from "./types"
import useMeasure from "@hooks/useMeasure"
import useDidValueChanged from '@hooks/useDidValueChanged'

const Collapsible: Types.CollapsibleComponent = forwardRef(({
    open = false,
    children,
    ...rest
}, ref) => {
    const { heightTransition } = useAnimation()
    const initialValue = useRef<boolean>(open)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const { rect: observeElementRect } = useMeasure(contentRef.current)
    const trackFromHeight = useRef(0)

    const observeElementHeight = observeElementRect.height

    const toggle = useDidValueChanged<Types.ToggleProps>({ observeElementHeight, open }, (prev, curr) => {
        // Check if a default open value is set to true.
        if (initialValue.current && curr.observeElementHeight > 0) {
            initialValue.current = false
            return false
        }
        return prev.open === curr.open
    })

    useIsomorphicLayoutEffect(() => {
        if (toggle) {
            const wrapperElement = wrapperRef.current
            const from = open ? trackFromHeight.current : observeElementHeight
            const to = open ? observeElementHeight : 0
            trackFromHeight.current = to
            heightTransition({ element: wrapperElement as HTMLDivElement, from, to })
        }
    }, [toggle, heightTransition, observeElementHeight, open])

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
