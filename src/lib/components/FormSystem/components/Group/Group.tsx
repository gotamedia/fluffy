import * as Types from "./types"
import * as Styled from "./style"

const Group: Types.GroupComponent = (props) => {
    const {
        children,
        $direction = "horizontal",
        inline,
        width
    } = props

    return (
        <Styled.Group $direction={$direction} inline={inline} width={width}>
            {children}
        </Styled.Group>
    )
}

export default Group
