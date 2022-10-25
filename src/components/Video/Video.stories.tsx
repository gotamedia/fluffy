import React from 'react'

import Video from './'
import { Video as Component } from './Video'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.VideoProps> = (props) => {
    return (
        <Video {...props}>
            <Video.Providers.YouTube />
        </Video>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/Video',
    component: Component,
    argTypes: {},
    args: {
        src: 'https://www.youtube.com/watch?v=Zu0Te0mYWWw'
    }
} as Meta<typeof Video>