import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React, { forwardRef, useCallback } from "react"
import type * as Types from "./types"

const DeleteButton: Types.ButtonComponent = forwardRef((props, ref) => {
    const {
        disabled: formDisabled,
        getButtonLabel,
        getFormData,
        isActing,
        isDeleting,
        onDelete,
        setIsDeleting
    } = useFormContext()

    const onClick = useCallback(() => {
        if (onDelete) {
            setIsDeleting(true)
            onDelete(
                getFormData(),
                () => {
                    setIsDeleting(false)
                }
            )
        }
    }, [getFormData, onDelete, setIsDeleting])

    return (
        <Button
            ref={ref}
            type={"button"}
            disabled={formDisabled || isActing}
            onClick={onClick}
            {...props}
        >
            {isDeleting && (
                <Icon
                    spin
                    icon={Icons.ArrowPath}
                />
            )}
            {getButtonLabel("delete")}
        </Button>
    )
})

export default DeleteButton
