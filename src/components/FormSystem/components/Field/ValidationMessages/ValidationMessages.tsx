import ValidationMessagesGroup from "./Group"
import * as Contexts from "../../../contexts"
import * as FSTypes from "../../../types"
import { useContext, useEffect, useState } from "react"
import * as Types from "./types"
import * as Styled from "./style"

const ValidationMessages: Types.ValidationMessagesComponent = () => {
    const { formData } = useContext(Contexts.FormContext)
    const { fieldName } = useContext(Contexts.FieldContext)
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
            Object.values(FSTypes.Validation.Types)
                .reverse()
                .reduce<FSTypes.Validation.Message[][]>((orderedGroupedMessages, type: FSTypes.Validation.Types) => {
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
