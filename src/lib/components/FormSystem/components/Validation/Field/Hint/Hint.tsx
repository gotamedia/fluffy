import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import { useCallback, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "hint"

const Hint: Types.HintComponent = (props) => {
    const {
        type = FSTypes.Validation.Types.Hint,
        i18n
    } = props

    const [uuid] = useState(uuidv4())

    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        return [
            {
                fieldName,
                type,
                text: sprintf(
                    i18n.text,
                    { value: String(value), fieldName, label: String(label) }
                )
            }
        ]
    }, [i18n?.text, label, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, removeValidation, uuid, validation])

    return null
}

export default Hint
