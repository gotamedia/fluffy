import FlexBox from "@components/FlexBox"
import * as Types from "./types"

const Group: Types.GroupComponent = (props) => {
    const { children, ...flexBoxProps } = props

    return (
        <FlexBox {...flexBoxProps} gap={"16px"}>
            {children}
        </FlexBox>
    )
}

export default Group
