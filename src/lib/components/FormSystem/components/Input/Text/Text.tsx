import React, { useCallback, useContext, useEffect } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"

const Text: Types.TextComponent = (props) => {
    const { name } = props

    const formContext = useContext(Contexts.FormContext)
    const fieldContext = useContext(Contexts.FieldContext)

    useEffect(() => {
        if (name !== fieldContext?.name) {
            fieldContext.setName(name)
        }
    }, [name, fieldContext])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        formContext.updateFormData(name, event?.target?.value)
    }, [formContext, name])

    return (
        <input
            name={name}
            id={name}
            value={String(formContext?.getFieldValue(name) || "")}
            onChange={onChange}
        />
    )
}

export default Text
