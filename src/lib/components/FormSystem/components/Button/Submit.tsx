import Button from "@components/Button"
import * as Contexts from "@components/FormSystem/contexts"
import Icon, { Icons } from "@components/Icon"
import React, { useContext } from "react"
import * as Types from "./types"

const SubmitButton: Types.SubmitButtonComponent = () => {
    const formContext = useContext(Contexts.FormContext)

    return (
        <Button type={"submit"} disabled={formContext.isSubmitting}>
            {formContext.isSubmitting && (
                <Icon icon={Icons.Spinner} />
            )}
            {formContext.getButtonLabel("submit")}
        </Button>
    )
}

export default SubmitButton
