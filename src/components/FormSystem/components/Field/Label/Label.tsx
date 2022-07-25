import { useContext } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"
import * as Styled from "./style"

const Label: Types.LabelComponent = () => {
    const { fieldName, isRequired, label } = useContext(Contexts.FieldContext)

    return (
        <Styled.Label htmlFor={fieldName}>
            <span dangerouslySetInnerHTML={{ __html: label }}/>
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
}

export default Label
