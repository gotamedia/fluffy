import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import DefaultLabel from "./DefaultLabel"
import * as Styled from "./style"
import * as Types from "./types"
import ValidationMessages from "./ValidationMessages"

const Field: Types.FieldComponent = (props) => {
    const { children, width } = props

    const fieldContextValue = Hooks.useFieldContext()

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
