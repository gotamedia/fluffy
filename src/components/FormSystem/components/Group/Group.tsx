import FlexBox from "@components/FlexBox"
import { forwardRef } from "react"
import type * as Types from "./types"

const Group: Types.GroupComponent = forwardRef((props, ref) => {
    const { children, ...flexBoxProps } = props

    return (
        <FlexBox {...flexBoxProps} ref={ref} gap={"16px"}>
            {children}
        </FlexBox>
    )
})

export default Group
