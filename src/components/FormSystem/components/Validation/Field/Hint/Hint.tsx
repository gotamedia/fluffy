import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "hint"

const Hint: Types.HintComponent = (props) => {
    const {
        children,
        i18n,
        type = FSTypes.Validation.Types.Hint
    } = props

    const [uuid] = useState(uuidv4())

    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        return [
            {
                fieldName,
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        i18n?.text || "",
                        { value: String(value), fieldName, label: String(label) }
                    )
            }
        ]
    }, [children, i18n?.text, label, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, removeValidation, uuid, validation])

    return null
}

export default Hint
