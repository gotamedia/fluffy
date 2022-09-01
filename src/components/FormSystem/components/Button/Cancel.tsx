import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React, { useCallback } from "react"
import type * as Types from "./types"

const CancelButton: Types.ButtonComponent = () => {
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
        <Button disabled={formDisabled || isActing} type={"button"} onClick={onClick}>
            {isCanceling && (
                <Icon icon={Icons.Spinner} />
            )}
            {getButtonLabel("cancel")}
        </Button>
    )
}

export default CancelButton
