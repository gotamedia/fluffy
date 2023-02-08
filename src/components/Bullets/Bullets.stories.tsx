import React, { useState } from 'react'

import Bullets from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'
import { SliderDirections } from '../Slider/types'

const Basic: Story<Types.BulletsProps> = (props) => {

    const {
        index = 0,
        count = 5,
        className = "",
        direction = SliderDirections.Horizontal,
        dynamicBullets = false,
        disabled = false,
    } = props

    const [actve, setActive] = useState(0)

    return (
        <div>
            <Bullets
                index={index}
                className={className}
                direction={direction}
                count={count}
                dynamicBullets={dynamicBullets}
                activeIndex={actve}
                onBulletClick={!disabled ? setActive : undefined}
            />
        </div>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/Bullets',
    component: Bullets,
    argTypes: {},
    args: {
        disabled: false,
    }
} as Meta<typeof Bullets>