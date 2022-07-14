import * as Styled from "@components/FormSystem/components/Field/ValidationMessages/style"
import useTheme from "@hooks/useTheme"
import * as FSTypes from "../../../types"
import * as Types from "./types"

const ValidationMessagesGroup: Types.GroupComponent = (props) => {
    const theme = useTheme()

    return (
        <>
            {props.validationMessages
                .sort((messageA, messageB) => {
                    return (messageA?.text || "") > (messageB?.text || "") ? -1 : 1
                })
                .map(
                    (validationMessage: FSTypes.Validation.Message) => (
                        <Styled.ValidationMessage
                            key={JSON.stringify(validationMessage)}
                            $type={validationMessage.type}
                            $theme={theme}
                            dangerouslySetInnerHTML={{ __html: validationMessage.text || "" }}
                        />
                    )
                )
            }
        </>
    )
}

export default ValidationMessagesGroup
