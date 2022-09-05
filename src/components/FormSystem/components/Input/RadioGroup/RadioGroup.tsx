import { useInputLogic } from "@components/FormSystem/hooks"
import type { FormDataValue } from "@components/FormSystem/types"
import Radio from "@components/Radio"
import usePrevious from "@hooks/usePrevious"
import React, { forwardRef, useCallback, useEffect } from "react"
import * as Styles from "./style"
import type * as Types from "./types"

const RadioGroup: Types.RadioGroupComponent = forwardRef((props, ref) => {
    const { allowDeselect, children, disabled, name, options, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((
        optionOnChange?: React.MouseEventHandler<HTMLInputElement>
    ) => (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const value = String((getFieldValue(name))) === (event.target as HTMLInputElement).value && allowDeselect
            ? ""
            : (event.target as HTMLInputElement).value

        setFieldValue(name, value)
        clearValidationMessages(name)
        validateOnChange(name, value)

        if (optionOnChange) {
            optionOnChange(event)
        }
    }, [allowDeselect, clearValidationMessages, getFieldValue, name, setFieldValue, validateOnChange])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <Styles.Wrapper ref={ref}>
                {options.map((option) => (
                    <Radio
                        key={option.value}
                        checked={String(value) === option.value}
                        {...option}
                        onClick={onChange(option.onClick)}
                        readOnly={option.readOnly || readOnly}
                        disabled={option.disabled || disabledCombined}
                    />
                ))}
            </Styles.Wrapper>
            {children}
        </>
    )
})

export default RadioGroup
