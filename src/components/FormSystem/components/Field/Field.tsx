import { useEffect } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import DefaultLabel from "./DefaultLabel"
import * as Styled from "./style"
import type * as Types from "./types"
import ValidationMessages from "./ValidationMessages"

const Field: Types.FieldComponent = (props) => {
    const { children, validateOnChange, width } = props

    const fieldContextValue = Hooks.useBuildFieldContext()

    useEffect(() => {
        fieldContextValue.setValidateOnChange(Boolean(validateOnChange))
    }, [fieldContextValue, validateOnChange])

    return (
        <Styled.Wrapper width={width}>
            <Contexts.FieldContext.Provider value={fieldContextValue}>
                <DefaultLabel />
                {children}
                <ValidationMessages />
            </Contexts.FieldContext.Provider>
        </Styled.Wrapper>
    )
}

export default Field
