import defaultI18n from "@components/FormSystem/sv.json"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import * as Contexts from "../../../../contexts"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "sameValue"

const SameValue: Types.SameValueComponent = (props) => {
    const {
        children,
        fieldAName,
        fieldBName,
        i18n,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { addFormValidation, i18n: formI18n, getFieldLabel, removeFormValidation } = useContext(Contexts.FormContext)

    const validation = useCallback<FSTypes.Validation.Form.Function>((formData) => {
        if (formData[fieldAName]?.value !== formData[fieldBName]?.value) {
            return [
                {
                    fieldName: fieldAName,
                    type,
                    involvedFieldNames: [fieldAName, fieldBName],
                    text: children !== undefined
                        ? renderToString(<>{children}</>)
                        : sprintf(
                            (
                                i18n?.textA ||
                                formI18n?.validations?.form?.sameValue?.textA ||
                                defaultI18n.validation.form.sameValue.textA
                            ),
                            {
                                fieldALabel: String(getFieldLabel(fieldAName)),
                                fieldBLabel: String(getFieldLabel(fieldBName)),
                                fieldAName,
                                fieldBName,
                                fieldAValue: String(formData[fieldAName]?.value),
                                fieldBValue: String(formData[fieldBName]?.value)
                            }
                        )
                },
                {
                    fieldName: fieldBName,
                    type,
                    involvedFieldNames: [fieldAName, fieldBName],
                    text: sprintf(
                        (
                            i18n?.textB ||
                            formI18n?.validations?.form?.sameValue?.textB ||
                            defaultI18n.validation.form.sameValue.textB
                        ),
                        {
                            fieldALabel: String(getFieldLabel(fieldAName)),
                            fieldBLabel: String(getFieldLabel(fieldBName)),
                            fieldAName,
                            fieldBName,
                            fieldAValue: String(formData[fieldAName]?.value),
                            fieldBValue: String(formData[fieldBName]?.value)
                        }
                    )
                }
            ]
        }

        return []
    }, [
        children,
        fieldAName,
        fieldBName,
        formI18n?.validations?.form?.sameValue?.textA,
        formI18n?.validations?.form?.sameValue?.textB,
        getFieldLabel,
        i18n?.textA,
        i18n?.textB,
        type
    ])

    useEffect(() => {
        addFormValidation(`${validationName}_${uuid}`, [fieldAName, fieldBName], validation, validateOnChange)

        return () => {
            removeFormValidation(`${validationName}_${uuid}`)
        }
    }, [addFormValidation, fieldAName, fieldBName, removeFormValidation, uuid, validateOnChange, validation])

    return null
}

export default SameValue
