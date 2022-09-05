import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import useTheme from "@hooks/useTheme"
import { useCallback, useEffect } from "react"
import type * as Types from "../types"

const useInputLogic = (props: Types.InputLogic.HookProps): Types.InputLogic.Value => {
    const {
        defaultValue,
        disabled,
        name
    } = props

    const theme = useTheme()

    const {
        clearValidationMessages,
        disabled: formDisabled,
        formData,
        getFieldValue,
        getHighestValidationMessageType,
        isActing,
        setFieldValue
    } = useFormContext()

    const {
        additionalInputProps,
        fieldName,
        initialize,
        setFieldName,
        terminate,
        validate
    } = useFieldContext()

    useEffect(() => {
        if (name !== fieldName) {
            setFieldName(name)
        }
    }, [fieldName, name, setFieldName])

    // separate initialize and terminate to avoid unwanted additional executions
    useEffect(() => {
        initialize(name, defaultValue)
    }, [defaultValue, initialize, name])

    useEffect(() => {
        return () => {
            terminate(name)
        }
    }, [terminate, name])

    const onBlur = useCallback(() => {
        clearValidationMessages(name, "all")
        validate()
    }, [clearValidationMessages, name, validate])

    const validateOnChange = useCallback((fieldName: string, fieldValue: Types.FormDataValue) => {
        const updatedFormData = {
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                value: fieldValue
            }
        }

        validate(updatedFormData, true)
    }, [formData, validate])

    return {
        additionalInputProps: additionalInputProps || { },
        clearValidationMessages,
        disabled: Boolean(formDisabled || isActing || disabled),
        getFieldValue,
        onBlur,
        setFieldValue,
        theme,
        validateOnChange,
        validationType: getHighestValidationMessageType(name),
        value: getFieldValue(name)
    }
}

export default useInputLogic
