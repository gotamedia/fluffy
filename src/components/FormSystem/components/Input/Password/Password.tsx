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
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: inputLogicOnBlur,
        setFieldValue,
        validateInstantUpdate,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = useCallback(() => {
        setShowPassword((currentShowPassword) => !currentShowPassword)
    }, [])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
        validateInstantUpdate(name, event?.target?.value)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateInstantUpdate, propsOnChange])

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
