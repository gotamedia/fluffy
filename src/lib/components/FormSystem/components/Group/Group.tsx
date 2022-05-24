import * as Types from "./types"
import * as Styled from "./style"

const Group: Types.GroupComponent = (props) => {
    const {
        children,
        $direction = "horizontal"
    } = props

    return (
        <Styled.Group $direction={$direction}>
            {children}
        </Styled.Group>
    )
}

export default Group
