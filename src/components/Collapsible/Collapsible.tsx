import { forwardRef, RefObject, useLayoutEffect, useRef, useState } from "react"

import * as Styled from "./style"
import * as Types from "./types"

const Collapsible: Types.Collapsible = forwardRef(({ open, children }, ref) => {
    const [height, setHeight] = useState<number>()
    const InnerWrapperRef: RefObject<HTMLDivElement> = useRef(null)

    useLayoutEffect(() => {
        if (open) {
            setHeight(InnerWrapperRef?.current?.clientHeight)
        } else {
            setHeight(0)
        }
    }, [open])

    return (
        <Styled.Wrapper ref={ref} height={height}>
            <Styled.InnerWrapper ref={InnerWrapperRef}>{children}</Styled.InnerWrapper>
        </Styled.Wrapper>
    )
})

Collapsible.displayName = "Collapsible"

export default Collapsible
