import UploadButton from './index'
import { UploadButton as Component } from './UploadButton'

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
    component: Component,
    argTypes: {},
    args: {
        // variant: 'primary',
        // size: 'normal',
        // label: 'Upload'
    }
} as Meta<Types.UploadButtonComponent>