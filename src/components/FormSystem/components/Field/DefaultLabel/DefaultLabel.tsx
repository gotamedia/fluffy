import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import { forwardRef } from "react"
import * as Styled from "./style"
import type * as Types from "./types"

const DefaultLabel: Types.LabelComponent = forwardRef((props, ref) => {
    const { fieldName, isRequired, label, showDefaultLabel } = useFieldContext()

    return showDefaultLabel === false || !label ? null : (
        <Styled.Label
            ref={ref}
            htmlFor={fieldName}
            {...props}
        >
            <span dangerouslySetInnerHTML={{ __html: label }}/>
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
})

export default DefaultLabel
