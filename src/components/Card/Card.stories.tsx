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
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!'}/>
                <Card.Paragraph text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>
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
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!'}/>
                <Card.Paragraph text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>

                <Card.IconsWrapper>
                    <Icon icon={Icons.CommandLine} />
                    <Icon icon={Icons.FingerPrint} />
                    <Icon icon={Icons.Gif} />
                    <Icon icon={Icons.QrCode} />
                    <Icon icon={Icons.RocketLaunch} />
                </Card.IconsWrapper>
            </Card.Body>
        </Card>
    )
}

const WithIconsStory = WithIcons.bind({})
WithIconsStory.storyName = 'With icons'

const WithImage: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Image
                alt={'fluffy-image'}
                src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
            />

            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!'}/>
                <Card.Paragraph text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>
            </Card.Body>
        </Card>
    )
}

const WithImageStory = WithImage.bind({})
WithImageStory.storyName = 'With image'

const Full: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Image
                alt={'fluffy-image'}
                src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
            />
            
            <Card.Body>
                <Card.Title text={'Such a fluffy title!'}/>
                <Card.Headline text={'Such a fluffy headline, Such a fluffy headline!'}/>
                <Card.Paragraph text={'Such a fluffy headline, Such a fluffy headline!\nSuch a fluffy headline!\nSuch a fluffy headline, Such a fluffy headline, Such a fluffy headline!'}/>

                <Card.IconsWrapper>
                    <Icon icon={Icons.CommandLine} />
                    <Icon icon={Icons.FingerPrint} />
                    <Icon icon={Icons.Gif} />
                    <Icon icon={Icons.QrCode} />
                    <Icon icon={Icons.RocketLaunch} />
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
    title: 'Developments/Components/Card',
    component: Card,
    argTypes: {},
    args: {
        size: 'normal',
        variant: 'light',
        loading: false,
        vertical: false,
        compact: false
    }
} as Meta<typeof Card>