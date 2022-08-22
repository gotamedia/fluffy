import * as FSTypes from "@components/FormSystem/types"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from 'uuid'
import * as Contexts from "../../../../contexts"
import * as Types from "./types"

const validationName = "loading"

const Loading: Types.LoadingComponent = (props) => {
    const {
        children,
        condition = true,
        i18n
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
                type: FSTypes.ValidationTypes.Loading,
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
