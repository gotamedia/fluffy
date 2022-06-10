import useTheme from "@hooks/useTheme"
import * as Contexts from "../../../contexts"
import * as FSTypes from "../../../types"
import { useContext } from "react"
import * as Types from "./types"
import * as Styled from "./style"

const ValidationMessages: Types.ValidationMessagesComponent = () => {
    const { getFieldValidationMessages } = useContext(Contexts.FormContext)
    const { fieldName } = useContext(Contexts.FieldContext)
    const theme = useTheme()

    return (
        <Styled.Wrapper>
            {getFieldValidationMessages(String(fieldName)).map(
                (validationMessage: FSTypes.Validation.Message) =>
                    <Styled.ValidationMessage
                        key={JSON.stringify(validationMessage)}
                        $type={validationMessage.type}
                        $theme={theme}
                    >
                        {validationMessage.text}
                    </Styled.ValidationMessage>
            )}
        </Styled.Wrapper>
    )
}

export default ValidationMessages
