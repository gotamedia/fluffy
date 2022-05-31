import { useContext } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import * as Types from "./types"
import * as FSTypes from "../..//types"

const Field: Types.FieldComponent = (props) => {
    const { children } = props

    const fieldContextValue = Hooks.useFieldContext()
    const formContext = useContext(Contexts.FormContext)

    return (
        <div>
            <Contexts.FieldContext.Provider value={fieldContextValue}>
                <label htmlFor={fieldContextValue?.name}>
                    {fieldContextValue.label}
                </label>
                {children}
                <div>
                    {formContext.getFieldValidationMessages(String(fieldContextValue?.name)).map(
                        (validationMessage: FSTypes.Validation.Message) => (
                            <p key={JSON.stringify(validationMessage)}>
                                {validationMessage.text}
                            </p>
                        )
                    )}
                </div>

            </Contexts.FieldContext.Provider>
        </div>
    )
}

export default Field
