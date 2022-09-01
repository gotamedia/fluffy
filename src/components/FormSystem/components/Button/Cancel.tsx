import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React, { forwardRef, useCallback } from "react"
import type * as Types from "./types"

const CancelButton: Types.ButtonComponent = forwardRef((props, ref) => {
    const {
        disabled: formDisabled,
        getButtonLabel,
        getFormData,
        isActing,
        isCanceling,
        onCancel,
        setIsCanceling
    } = useFormContext()

    const onClick = useCallback(() => {
        if (onCancel) {
            setIsCanceling(true)
            onCancel(
                getFormData(),
                () => {
                    setIsCanceling(false)
                }
            )
        }
    }, [getFormData, onCancel, setIsCanceling])

    return (
        <Button
            ref={ref}
            disabled={formDisabled || isActing}
            type={"button"}
            onClick={onClick}
            {...props}
        >
            {isCanceling && (
                <Icon icon={Icons.Spinner} />
            )}
            {getButtonLabel("cancel")}
        </Button>
    )
})

export default CancelButton
