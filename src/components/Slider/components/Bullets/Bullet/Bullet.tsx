import { forwardRef, MouseEventHandler, useCallback } from "react"
import useSlider from "../../../hooks/useSlider"

import * as Styled from "./style"
import type * as Types from "./types"

const Bullet: Types.BulletComponent = forwardRef(({
    ariaLabel,
    bulletIndex,
    clickable,
    size,
    ...rest
}, ref) => {
    const { index, goToIndex, direction } = useSlider()

    const onClickHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        goToIndex(bulletIndex)
    }, [bulletIndex, goToIndex])

    return (
        <Styled.Bullet
            ref={ref}
            aria-lable={ariaLabel}
            $active={index === bulletIndex}
            $clickable={clickable}
            $size={size}
            onClick={onClickHandler}
            {...rest}
        />
    )
})

export default Bullet
