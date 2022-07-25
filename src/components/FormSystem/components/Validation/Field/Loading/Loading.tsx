import * as FSTypes from "@components/FormSystem/types"
import { FormDataValue } from "@components/FormSystem/types"
import { useCallback, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import * as Contexts from "../../../../contexts"
import * as Types from "./types"

const validationName = "loading"

const Loading: Types.LoadingComponent = (props) => {
    const { condition, i18n } = props

    const [uuid] = useState(uuidv4())

    const { addValidation, removeValidation } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (!condition) {
            return []
        }

        return [
            {
                fieldName,
                type: FSTypes.Validation.Types.Loading,
                text: i18n.text
            }
        ]
    }, [condition, i18n])

    useEffect(() => {
        if (condition) {
            addValidation(`${validationName}_${uuid}`, validation)
        } else {
            removeValidation(`${validationName}_${uuid}`)
        }

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, condition, removeValidation, uuid, validation])

    return null
}

export default Loading
