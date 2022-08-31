import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import * as Contexts from "../../../../contexts"
import type * as Types from "./types"

const Custom: Types.CustomComponent = (props) => {
    const { validationFunction, validateOnChange } = props

    const [uuid] = useState(uuidv4())

    const {
        addValidation,
        removeValidation,
        validateOnChange: fieldContextValidateOnChange
    } = useContext(Contexts.FieldContext)

    useEffect(() => {
        addValidation(`custom_field_${uuid}`, validationFunction, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`custom_field_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validationFunction])

    return null
}

export default Custom
