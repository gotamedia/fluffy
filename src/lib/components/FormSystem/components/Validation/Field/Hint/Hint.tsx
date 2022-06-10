import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import { useCallback, useContext, useEffect } from "react"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "hint"

const Hint: Types.HintComponent = (props) => {
    const {
        type = FSTypes.Validation.Types.Hint,
        i18n
    } = props

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
        addValidation(validationName, validation)

        return () => {
            removeValidation(validationName)
        }
    }, [addValidation, removeValidation, validation])

    return null
}

export default Hint
