import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React from "react"
import type * as Types from "./types"

const SubmitButton: Types.ButtonComponent = () => {
    const { disabled: formDisabled, getButtonLabel, isActing, isSubmitting } = useFormContext()

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
