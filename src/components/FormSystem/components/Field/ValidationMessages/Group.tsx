import Icon, { Icons, IconSizes, IconType } from "@components/Icon"
import * as Styled from "./style"
import useTheme from "@hooks/useTheme"
import * as FSTypes from "../../../types"
import * as Types from "./types"

const iconMap = new Map<FSTypes.Validation.Types, IconType>([
    [FSTypes.Validation.Types.Error, Icons.Error],
    [FSTypes.Validation.Types.Hint, Icons.Hint],
    [FSTypes.Validation.Types.Loading, Icons.Loading],
    [FSTypes.Validation.Types.Success, Icons.Success],
    [FSTypes.Validation.Types.Warning, Icons.Warning]
])

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
                        >
                            <Icon
                                icon={iconMap.get(validationMessage.type) || Icons.Hint}
                                size={IconSizes.Tiny}
                            />
                            <span dangerouslySetInnerHTML={{ __html: validationMessage.text || "" }} />
                        </Styled.ValidationMessage>
                    )
                )
            }
        </>
    )
}

export default ValidationMessagesGroup
