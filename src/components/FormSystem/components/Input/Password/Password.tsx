import { useInputLogic } from "@components/FormSystem/hooks"
import Icon, { Icons } from "@components/Icon"
import Input from "@components/Input"
import InputGroup from "@components/InputGroup"
import React, { useCallback, useState } from "react"
import * as Types from "./types"

const Password: Types.PasswordComponent = (props) => {
    const {
        children,
        disabled,
        name,
        onBlur: propsOnBlur,
        onChange: propsOnChange,
        visibilityToggleable,
        ...plainTextProps
    } = props

    const {
        additionalInputProps,
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: inputLogicOnBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = useCallback(() => {
        setShowPassword((currentShowPassword) => !currentShowPassword)
    }, [])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
        validateOnChange(name, event?.target?.value)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateOnChange, propsOnChange])

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        inputLogicOnBlur()

        if (propsOnBlur) {
            propsOnBlur(event)
        }
    }, [inputLogicOnBlur, propsOnBlur])

    return (
        <>
            <InputGroup>
                <Input
                    maxLength={additionalInputProps?.maxLength}
                    disabled={disabledCombined}
                    id={name}
                    name={name}
                    value={String(value)}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={!visibilityToggleable || !showPassword ? "password" : "text"}
                    {...plainTextProps}
                />
                {visibilityToggleable && (
                    <Icon icon={showPassword ? Icons.EyeStrikethrough : Icons.Eye} onClick={toggleVisibility} />
                )}
            </InputGroup>


            {children}
        </>
    )
}

export default Password
