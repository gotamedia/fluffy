import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import Label from "./Label"
import * as Styled from "./style"
import * as Types from "./types"
import ValidationMessages from "./ValidationMessages"

const Field: Types.FieldComponent = (props) => {
    const { children } = props

    const fieldContextValue = Hooks.useFieldContext()

    return (
        <Styled.Wrapper>
            <Contexts.FieldContext.Provider value={fieldContextValue}>
                <Label />
                {children}
                <ValidationMessages />
            </Contexts.FieldContext.Provider>
        </Styled.Wrapper>
    )
}

export default Field
