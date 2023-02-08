import { forwardRef } from "react"
import { useMemo } from "react"
import Bullet from "../Bullet/Bullet"
import * as Styled from "./style"
import * as Types from "./types"
import { SliderDirections } from "@root/components/Slider/types"

const Bullets: Types.BulletsComponent = forwardRef((props, ref) => {
    const {
        direction = SliderDirections.Horizontal,
        count = 0,
        dynamicBullets = false,
        activeIndex = 0,
        onBulletClick,
        ...filteredProps
    } = props

    const bullets = useMemo(() => {
        return Array.from({ length: count }, (v, idx) => ({
            key: `slider-pagination-${idx + 1}`,
            ariaLabel: `Go to slide ${idx + 1}`
        }))
    }, [count])

    return (
        <Styled.Wrapper
            ref={ref}
            direction={direction}
            dynamicBullets={dynamicBullets}
            {...filteredProps}
        >
            {
                bullets.map((bullet: any, index) => {
                    return (
                        <Bullet
                            index={index}
                            dynamicBullets={dynamicBullets}
                            key={bullet.key}
                            ariaLabel={bullet.ariaLabel}
                            active={activeIndex === index}
                            direction={direction}
                            activeIndex={activeIndex}
                            onBulletClick={() => activeIndex !== index && onBulletClick ? onBulletClick(index) : null}
                        />
                    )
                })
            }
        </Styled.Wrapper>
    )
})

export default Bullets