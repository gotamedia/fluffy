import { useContext, useEffect } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"
import * as Styled from "./style"

const Label: Types.LabelComponent = (props) => {
    const { children } = props
    const { fieldName, isRequired, setShowDefaultLabel } = useContext(Contexts.FieldContext)

    useEffect(() => {
        setShowDefaultLabel(false)

        return () => {
            setShowDefaultLabel(true)
        }
    }, [setShowDefaultLabel])

    return (
        <Styled.Label htmlFor={fieldName}>
            {children}
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
}

export default Label
