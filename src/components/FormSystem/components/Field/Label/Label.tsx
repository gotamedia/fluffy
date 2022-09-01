import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import { useEffect } from "react"
import * as Styled from "./style"
import type * as Types from "./types"

const Label: Types.LabelComponent = (props) => {
    const { children } = props
    const { fieldName, isRequired, setShowDefaultLabel } = useFieldContext()

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
