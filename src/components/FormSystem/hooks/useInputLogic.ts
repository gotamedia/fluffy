import * as Contexts from "@components/FormSystem/contexts"
import useTheme from "@hooks/useTheme"
import { useCallback, useContext, useEffect } from "react"
import * as Types from "../types"

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
    } = useContext(Contexts.FormContext)

    const {
        fieldName,
        initialize,
        setFieldName,
        terminate,
        validate
    } = useContext(Contexts.FieldContext)

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

    const validateInstantUpdate = useCallback((fieldName: string, fieldValue: Types.FormDataValue) => {
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
        clearValidationMessages,
        disabled: Boolean(formDisabled || isActing || disabled),
        getFieldValue,
        onBlur,
        setFieldValue,
        theme,
        validateInstantUpdate,
        validationType: getHighestValidationMessageType(name),
        value: getFieldValue(name)
    }
}

export default useInputLogic
