import React from 'react'

import Maps from '.'

import type { Story, Meta } from '@storybook/react'

const Basic: Story = () => {
    const position = [
        56.66358831822493,
        16.36534040418419
    ]

    return (
        <Maps.Map
            height={700}
            defaultZoom={15}
            defaultCenter={position as Maps.Point}
        >
            <Maps.Marker
                width={50}
                anchor={position as Maps.Point}
            />

            <Maps.ZoomControl />
        </Maps.Map>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/Maps',
    component: Maps.Map,
    argTypes: {},
    args: {}
} as Meta<typeof Maps.Map>