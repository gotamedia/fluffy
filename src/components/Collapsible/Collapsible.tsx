import {
    forwardRef,
    useRef,
    useEffect
} from "react"

import useMeasure from "@hooks/useMeasure"
import useDidValueChanged from '@hooks/useDidValueChanged'
import useAnimation from "@hooks/useAnimation"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"

import * as Styled from "./style"
import * as Types from "./types"

const Collapsible: Types.CollapsibleComponent = forwardRef((props, ref) => {
    const {
        open = false,
        children,
        ...rest
    } = props

    const trackFromHeight = useRef(0)
    const transitioning = useRef(false)
    const initialValue = useRef<boolean>(open)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const { heightTransition } = useAnimation()

    const { rect: observeElementRect } = useMeasure(contentRef.current)

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
        if (toggle && wrapperRef.current) {
            transitioning.current = true
            
            const from = open ? trackFromHeight.current : observeElementHeight
            const to = open ? observeElementHeight : 0
            
            trackFromHeight.current = to
            
            heightTransition({
                element: wrapperRef.current,
                from,
                to,
                onComplete: () => {
                    transitioning.current = false
                }
            })
        }
    }, [
        toggle,
        heightTransition,
        observeElementHeight,
        open
    ])

    useEffect(() => {
        if (open && !transitioning.current) {
            const wrapperElement = wrapperRef.current
            
            const from = trackFromHeight.current
            const to = observeElementHeight
            
            trackFromHeight.current = to

            heightTransition({ element: wrapperElement as HTMLDivElement, from, to })
        }
    }, [
        heightTransition,
        observeElementHeight,
        open,
        children
    ])

    return (
        <Styled.Container
            ref={ref}
            {...rest}
        >
            <Styled.Wrapper ref={wrapperRef}>
                <Styled.ContentWrapper ref={contentRef}>
                    {children}
                </Styled.ContentWrapper>
            </Styled.Wrapper>
        </Styled.Container>
    )
})

Collapsible.displayName = "Collapsible"

export default Collapsible
