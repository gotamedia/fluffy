import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import type * as Types from "./types"

const Custom: Types.CustomComponent = (props) => {
    const { validationFunction, validateOnChange } = props

    const [uuid] = useState(uuidv4())

    const {
        addValidation,
        removeValidation,
        validateOnChange: fieldContextValidateOnChange
    } = useFieldContext()

    useEffect(() => {
        addValidation(`custom_field_${uuid}`, validationFunction, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`custom_field_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validationFunction])

    return null
}

export default Custom
