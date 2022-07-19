import Button from "@components/Button"
import * as Contexts from "@components/FormSystem/contexts"
import Icon, { Icons } from "@components/Icon"
import React, { useContext } from "react"
import * as Types from "./types"

const SubmitButton: Types.ButtonComponent = () => {
    const { disabled: formDisabled, getButtonLabel, isActing, isSubmitting } = useContext(Contexts.FormContext)

    return (
        <Button type={"submit"} disabled={formDisabled || isActing}>
            {isSubmitting && (
                <Icon icon={Icons.Spinner} />
            )}
            {getButtonLabel("submit")}
        </Button>
    )
}

export default SubmitButton
