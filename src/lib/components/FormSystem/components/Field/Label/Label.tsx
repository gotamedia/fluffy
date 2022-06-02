import { useContext } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"
import * as Styled from "./style"

const Label: Types.LabelComponent = () => {
    const { fieldName, label } = useContext(Contexts.FieldContext)

    return (
        <Styled.Label htmlFor={fieldName}>
            {label}
        </Styled.Label>
    )
}

export default Label
