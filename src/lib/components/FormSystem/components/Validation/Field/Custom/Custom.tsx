import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import * as Contexts from "../../../../contexts"
import * as Types from "./types"

const Custom: Types.CustomComponent = (props) => {
    const { validationFunction } = props

    const [uuid] = useState(uuidv4())

    const { addValidation, removeValidation } = useContext(Contexts.FieldContext)

    useEffect(() => {
        addValidation("custom_field_" + uuid, validationFunction)

        return () => {
            removeValidation("custom_field_" + uuid)
        }
    }, [addValidation, removeValidation, uuid, validationFunction])

    return null
}

export default Custom
