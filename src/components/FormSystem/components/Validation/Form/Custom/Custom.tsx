import { useCallback, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import * as Contexts from "../../../../contexts"
import type * as FSTypes from "../../../../types"
import type * as Types from "./types"

const Custom: Types.CustomComponent = (props) => {
    const { involvedFieldNames, validateOnChange, validationFunction } = props

    const [uuid] = useState(uuidv4())

    const { addFormValidation, removeFormValidation } = useContext(Contexts.FormContext)

    const validation = useCallback<FSTypes.Validation.Form.Function>((formData) => {
        const validationMessages = validationFunction(formData)

        return validationMessages.map((validationMessage) => ({
            ...validationMessage,
            involvedFieldNames: Array.from(new Set(
                [
                    ...(validationMessage.involvedFieldNames || []),
                    ...involvedFieldNames,
                    validationMessage.fieldName
                ]
            ))
        }))
    }, [involvedFieldNames, validationFunction])

    useEffect(() => {
        addFormValidation("custom_form_" + uuid, involvedFieldNames, validation, validateOnChange)

        return () => {
            removeFormValidation("custom_form_" + uuid)
        }
    }, [addFormValidation, involvedFieldNames, removeFormValidation, uuid, validateOnChange, validation])

    return null
}

export default Custom
