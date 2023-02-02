import {
    forwardRef,
    useMemo
} from "react"

import useSlider from "../../hooks/useSlider"

import Bullet from "./Bullet"

import { BulletSizes } from "./constants"

import * as Styled from "./style"
import type * as Types from "./types"

const Bullets: Types.BulletsComponent = forwardRef((props, ref) => {
    const {
        clickable = true,
        size = BulletSizes.Small,
        ...filteredProps
    } = props

    const {
        slidesLength,
        direction
    } = useSlider()

    const bullets = useMemo(() => {
        return Array.from({ length: slidesLength }, (v, idx) => ({
            key: `slider-pagination-${idx + 1}`,
            ariaLabel: `Go to slide ${idx + 1}`,
            bulletIndex: idx
        }))
    }, [slidesLength])

    return (
        <Styled.Wrapper
            ref={ref}
            $direction={direction}
            {...filteredProps}
        >
            {bullets.map((bullet) => (
                <Bullet
                    key={bullet.key}
                    ariaLabel={bullet.ariaLabel}
                    bulletIndex={bullet.bulletIndex}
                    clickable={clickable}
                    size={size}
                />
            ))}
        </Styled.Wrapper>
    )
})

Bullets.displayName = "Bullets"

export default Bullets