import React from 'react'

import Video from './'

// import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story = (props) => {
    return (
        <>
            <Video {...props} />
            <Video {...props} />
        </>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/Video',
    component: Video,
    argTypes: {},
    args: {
        src: 'https://www.youtube.com/watch?v=D1ktPIVbVgA'
    }
} as Meta<typeof Video>