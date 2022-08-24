import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "info"

const Info: Types.InfoComponent = (props) => {
    const {
        children,
        condition = true,
        i18n,
    } = props

    const [uuid] = useState(uuidv4())

    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (!condition) {
            return []
        }

        return [
            {
                fieldName,
                type: FSTypes.ValidationTypes.Info,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        i18n?.text || "",
                        { value: String(value), fieldName, label: String(label) }
                    )
            }
        ]
    }, [children, condition, i18n?.text, label])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, removeValidation, uuid, validation])

    return null
}

export default Info
