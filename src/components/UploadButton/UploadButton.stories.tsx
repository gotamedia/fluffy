import React from 'react'

import UploadButton from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.UploadButtonProps & {
    label: string
}> = ({ label, ...props }) => {
    return (
        <UploadButton
            {...props}
        >
            {label}
        </UploadButton>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/UploadButton',
    component: UploadButton,
    argTypes: {},
    args: {
        variant: 'primary',
        size: 'normal',
        label: 'Upload'
    }
} as Meta<typeof UploadButton>