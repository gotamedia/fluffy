import { useContext } from "react"
import * as Types from "./types"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"

const Field: Types.FieldComponent = (props) => {
    const { children } = props

    const formContext = useContext(Contexts.FormContext)

    const fieldContextValue = Hooks.useFieldContext()

    return (
        <div>
            <Contexts.FieldContext.Provider value={fieldContextValue}>
                <label htmlFor={fieldContextValue?.name}>
                    {formContext.getFieldLabel(fieldContextValue?.name as string)}
                </label>
                {children}
            </Contexts.FieldContext.Provider>
        </div>
    )
}

export default Field
