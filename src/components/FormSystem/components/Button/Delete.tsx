import Button from "@components/Button"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import Icon, { Icons } from "@components/Icon"
import React, { useCallback } from "react"
import type * as Types from "./types"

const DeleteButton: Types.ButtonComponent = () => {
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
        <Button type={"button"} disabled={formDisabled || isActing} onClick={onClick}>
            {isDeleting && (
                <Icon icon={Icons.Spinner} />
            )}
            {getButtonLabel("delete")}
        </Button>
    )
}

export default DeleteButton
