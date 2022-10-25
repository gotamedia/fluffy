import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React, { forwardRef } from "react"
import type * as Types from "./types"

const SubmitButton: Types.ButtonComponent = forwardRef((props, ref) => {
    const { disabled: formDisabled, getButtonLabel, isActing, isSubmitting } = useFormContext()

    return (
        <Button
            ref={ref}
            type={"submit"}
            disabled={formDisabled || isActing}
            {...props}
        >
            {isSubmitting && (
                <Icon
                    spin
                    icon={Icons.ArrowPath}
                />
            )}
            {getButtonLabel("submit")}
        </Button>
    )
})

export default SubmitButton
