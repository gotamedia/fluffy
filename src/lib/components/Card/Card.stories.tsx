import React from 'react'

import Card from '.'
import Icon, { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>
            </Card.Body>
        </Card>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const WithIcons: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>

                <Card.IconsWrapper>
                    <Icon icon={Icons.Facebook} />
                    <Icon icon={Icons.Twitter} />
                    <Icon icon={Icons.Linkedin} />
                    <Icon icon={Icons.Mail} />
                    <Icon icon={Icons.ArrowDown} />
                </Card.IconsWrapper>
            </Card.Body>
        </Card>
    )
}

const WithIconsStory = WithIcons.bind({})
WithIconsStory.storyName = 'WithIcons'

const WithImage: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Image
                alt={'fluffy-image'}
                src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
            />

            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>
            </Card.Body>
        </Card>
    )
}

const WithImageStory = WithImage.bind({})
WithImageStory.storyName = 'WithImage'

const Full: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Image
                alt={'fluffy-image'}
                src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
            />
            
            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>

                <Card.IconsWrapper>
                    <Icon icon={Icons.Facebook} />
                    <Icon icon={Icons.Twitter} />
                    <Icon icon={Icons.Linkedin} />
                    <Icon icon={Icons.Mail} />
                    <Icon icon={Icons.ArrowDown} />
                </Card.IconsWrapper>
            </Card.Body>
        </Card>
    )
}

const FullStory = Full.bind({})
FullStory.storyName = 'Full'

export {
    BasicStory,
    WithIconsStory,
    WithImageStory,
    FullStory
}

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {},
    args: {
        size: 'normal',
        variant: 'light',
        loading: false
    }
} as Meta<typeof Card>