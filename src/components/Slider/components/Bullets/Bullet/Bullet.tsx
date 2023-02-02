import {
    forwardRef,
    MouseEventHandler,
    useCallback
} from "react"

import useSlider from "../../../hooks/useSlider"

import * as Styled from "./style"
import type * as Types from "./types"

const Bullet: Types.BulletComponent = forwardRef((props, ref) => {
    const {
        ariaLabel,
        bulletIndex,
        clickable,
        size,
        ...filteredProps
    } = props

    const {
        index,
        goToIndex
    } = useSlider()

    const onClickHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        if (clickable) {
            goToIndex(bulletIndex)
        }
    }, [bulletIndex, clickable, goToIndex])

    return (
        <Styled.Bullet
            ref={ref}
            aria-lable={ariaLabel}
            $active={index === bulletIndex}
            $clickable={clickable}
            $size={size}
            onClick={onClickHandler}
            {...filteredProps}
        />
    )
})

export default Bullet