import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import * as Styled from "./style"
import type * as Types from "./types"

const DefaultLabel: Types.LabelComponent = () => {
    const { fieldName, isRequired, label, showDefaultLabel } = useFieldContext()

    return showDefaultLabel === false || !label ? null : (
        <Styled.Label htmlFor={fieldName}>
            <span dangerouslySetInnerHTML={{ __html: label }}/>
            {isRequired ? (<sup style={{ color: "red" }}>*</sup>) : null}
        </Styled.Label>
    )
}

export default DefaultLabel
