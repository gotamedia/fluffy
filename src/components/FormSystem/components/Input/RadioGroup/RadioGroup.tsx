import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import Radio from "@components/Radio"
import usePrevious from "@hooks/usePrevious"
import React, { useCallback, useEffect } from "react"
import * as Styles from "./style"
import * as Types from "./types"

const RadioGroup: Types.RadioGroupComponent = (props) => {
    const { allowDeselect, children, disabled, name, options, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange: React.MouseEventHandler<HTMLInputElement> = useCallback((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const value = String((getFieldValue(name))) === (event.target as HTMLInputElement).value && allowDeselect
            ? ""
            : (event.target as HTMLInputElement).value

        setFieldValue(name, value)
        clearValidationMessages(name)
    }, [getFieldValue, name, allowDeselect, setFieldValue, clearValidationMessages])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <Styles.Wrapper>
                {options.map((option) => (
                    <Radio
                        key={option.value}
                        checked={String((getFieldValue(name))) === option.value}
                        disabled={disabledCombined}
                        onClick={onChange}
                        readOnly={readOnly}
                        {...option}
                    />
                ))}
            </Styles.Wrapper>
            {children}
        </>
    )
}

export default RadioGroup
