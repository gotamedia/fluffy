import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import { forwardRef, useEffect } from "react"
import * as Styled from "./style"
import type * as Types from "./types"

const Label: Types.LabelComponent = forwardRef((props, ref) => {
    const { children } = props
    const { fieldName, isRequired, setShowDefaultLabel } = useFieldContext()

    useEffect(() => {
        setShowDefaultLabel(false)

        return () => {
            setShowDefaultLabel(true)
        }
    }, [setShowDefaultLabel])

    return (
        <Styled.Label
            ref={ref}
            htmlFor={fieldName}
            {...props}
        >
            {children}
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
})

export default Label
