import { useContext } from "react"
import type * as Types from "./types"
import * as Contexts from "../../../contexts"
import * as Styled from "./style"

const DefaultLabel: Types.LabelComponent = () => {
    const { fieldName, isRequired, label, showDefaultLabel } = useContext(Contexts.FieldContext)

    return showDefaultLabel === false || !label ? null : (
        <Styled.Label htmlFor={fieldName}>
            <span dangerouslySetInnerHTML={{ __html: label }}/>
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
}

export default DefaultLabel
