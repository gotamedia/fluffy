import { SliderDirections } from "@root/components/Slider/types"
import { MouseEventHandler, useCallback } from "react"

import * as Styled from "./style"
import type * as Types from "./types"

const Bullet: Types.BulletComponent = ({
    ariaLabel,
    active,
    activeIndex = 0,
    onBulletClick, 
    index,
    dynamicBullets,
    direction = SliderDirections.Horizontal,
    ...rest
}) => {

    const onClickHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        onBulletClick(activeIndex)
    }, [activeIndex, onBulletClick])

    const initnumber = 48;

    return (
        <Styled.Bullet
            direction={direction}
            prevBullet={index === activeIndex-1}
            nextBullet={index === activeIndex+1}
            isDynamic={dynamicBullets}
            left={direction === SliderDirections.Horizontal ? initnumber - (activeIndex+1)*16 : 0}
            top={direction === SliderDirections.Vertical ? initnumber - (activeIndex+1)*16 : 0}
            aria-label={ariaLabel}
            active={active}
            onClick={onClickHandler}
            {...rest}
        />
    )
}

export default Bullet
