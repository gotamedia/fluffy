import Bullets from "@root/components/Bullets/Bullets"
import { forwardRef } from "react"

import useSlider from "../../hooks/useSlider"
import type * as Types from "./types"

const SliderBullets: Types.SliderBulletsComponent = forwardRef(({ className }, ref) => {
    const {
        index = 0,
        slidesLength,
        direction,
        dynamicBullets = false,
        goToIndex,
    } = useSlider()

    return (
        <Bullets
            index={index}
            className={className}
            direction={direction}
            count={slidesLength}
            dynamicBullets={dynamicBullets}
            activeIndex={index}
            onBulletClick={goToIndex}
        />
    )
})

export default SliderBullets