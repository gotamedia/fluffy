import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import { HintTypes } from "@components/Hint/types"
import { useEffect, useState } from "react"
import type * as FSTypes from "../../../types"
import ValidationMessagesGroup from "./Group"
import * as Styled from "./style"
import type * as Types from "./types"

const ValidationMessages: Types.ValidationMessagesComponent = () => {
    const { formData } = useFormContext()
    const { fieldName } = useFieldContext()
    const [groups, setGroups] = useState<FSTypes.Validation.Message[][]>([])

    useEffect(() => {
        const unorderedGroupedMessages = (formData?.[String(fieldName)]?.validationMessages || [])
            .reduce<FSTypes.Validation.Groups>((reducedGroups, message) => {
                return {
                    ...reducedGroups,
                    [message?.type]: [
                        ...(reducedGroups[message?.type] || []),
                        message
                    ]
                }
            }, {})

        setGroups(
            Object.values(HintTypes)
                .reverse()
                .reduce<FSTypes.Validation.Message[][]>((orderedGroupedMessages, type: FSTypes.ValidationTypes) => {
                    return [
                        ...orderedGroupedMessages,
                        ...(unorderedGroupedMessages[type] ? [unorderedGroupedMessages[type]] : [])
                    ]
                }, [])
        )
    }, [fieldName, formData])

    return groups.length === 0 ? null : (
        <Styled.Wrapper>
            {groups.map((group, index) => (
                <ValidationMessagesGroup key={index} validationMessages={group} />
            ))}
        </Styled.Wrapper>
    )
}

export default ValidationMessages
