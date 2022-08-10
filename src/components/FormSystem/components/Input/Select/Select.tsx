import { useInputLogic } from "@components/FormSystem/hooks"
import ListItem from "@components/ListItem"
import PlainSelect from "@components/Select"
import usePrevious from "@hooks/usePrevious"
import React, { useCallback, useEffect } from "react"
import * as FSTypes from "../../../types"
import { FormDataValue } from "../../../types"
import * as Types from "./types"

const Select: Types.SelectComponent = (props) => {
    const { children, disabled, isMultiSelect, name, onSelect, options, ...selectProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur,
        setFieldValue,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((option: any) => {
        const currentValue: string[] = value && typeof value === "string" ? value.split("~") : []
        let newValue: FSTypes.FormDataValue

        if (currentValue.includes(option.value)) {
            newValue = currentValue.filter((currentOption) => currentOption !== option.value).join("~")
        } else {
            if (isMultiSelect) {
                newValue = [...currentValue, option.value].join("~")
            } else {
                newValue = option.value
            }
        }

        setFieldValue(name, newValue)
        clearValidationMessages(name)

        if (onSelect) {
            onSelect(option)
        }
    }, [clearValidationMessages, isMultiSelect, name, onSelect, setFieldValue, value])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [previousValue, onBlur, value])

    const selected = String(value).split("~").map((value) => {
        const option = options.filter((option) => option.value === value)?.[0]
        return !option ? undefined : { label: option.text, value: option.value }
    }).filter(Boolean)

    return (
        <>
            <PlainSelect
                isMultiSelect={isMultiSelect}
                {...selectProps}
                disabled={disabledCombined}
                onSelect={onChange}
                selected={selected}
            >
                {options.map((option) => (
                    <ListItem key={JSON.stringify(option)} {...option} />
                ))}
            </PlainSelect>
            {children}
        </>
    )
}

export default Select
