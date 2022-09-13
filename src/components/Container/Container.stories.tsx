

import { Story, Meta } from '@storybook/react'

import Container from './index'

import * as Types from './types'

const Template: Story<Types.ContainerProps> = (props) => {
    return (
        <Container {...props}>
            <h2>
                {'I am within a Container'}
            </h2>
        </Container>
    )
}

export const Basic = Template.bind({})

export default {
    title: 'Developments/Components/Container',
    component: Container,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.ContainerComponent>