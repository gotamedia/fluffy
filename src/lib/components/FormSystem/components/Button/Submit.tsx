import Button from "@components/Button"
import * as Contexts from "@components/FormSystem/contexts"
import Icon, { Icons } from "@components/Icon"
import React, { useContext } from "react"
import * as Types from "./types"

const SubmitButton: Types.SubmitButtonComponent = () => {
    const { disabled: formDisabled, getButtonLabel, isSubmitting } = useContext(Contexts.FormContext)

    return (
        <Button type={"submit"} disabled={formDisabled || isSubmitting}>
            {isSubmitting && (
                <Icon icon={Icons.Spinner} />
            )}
            {getButtonLabel("submit")}
        </Button>
    )
}

export default SubmitButton
