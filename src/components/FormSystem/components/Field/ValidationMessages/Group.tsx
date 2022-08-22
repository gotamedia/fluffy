import Hint from "@components/Hint/Hint"
import * as FSTypes from "../../../types"
import * as Types from "./types"

const ValidationMessagesGroup: Types.GroupComponent = (props) => (
    <>
        {props.validationMessages
            .sort((messageA, messageB) => {
                return (messageA?.text || "") > (messageB?.text || "") ? -1 : 1
            })
            .map(
                (validationMessage: FSTypes.Validation.Message) => (
                    <Hint
                        key={JSON.stringify(validationMessage)}
                        type={validationMessage.type}
                    >
                        <span dangerouslySetInnerHTML={{ __html: validationMessage.text || "" }} />
                    </Hint>
                )
            )
        }
    </>
)

export default ValidationMessagesGroup
