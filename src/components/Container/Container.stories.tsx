import { Story, Meta } from '@storybook/react'

import Container from './'
import { Container as Component } from './Container'

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

export const BasicStory = Template.bind({})

export default {
    title: 'Developments/Components/Container',
    component: Component,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.ContainerComponent>