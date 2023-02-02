import styled from 'styled-components'

import Card from '.'

import Dates from '../../utils/date'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Content = styled.div`
    display: flex;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 15px;
`

const ImageWrapper = styled.div`
    display: flex;
    margin: 0 0 auto auto;
`

const Basic: Story<Types.CardProps> = (props) => {
    return (
        <Card {...props}>
            <Card.Body>
                <Card.SubHeadline>
                    {`Published ${Dates.format(new Date(), 'dd/MM/yyyy')}`}
                </Card.SubHeadline>

                <Card.Headline>
                    {`Such a fluffy headline`}
                </Card.Headline>

                <Content>
                    <TextWrapper>
                        <Card.Paragraph>
                            {'This is a description first row This is a description first row This is a description first row This is a description first row This is a description first row'}
                        </Card.Paragraph>

                        <Card.Paragraph>
                            {'second row'}
                        </Card.Paragraph>
                    </TextWrapper>

                    <ImageWrapper>
                        <Card.Image
                            alt={'fluffy-image'}
                            src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
                        />
                    </ImageWrapper>
                </Content>
            </Card.Body>
        </Card>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {},
    args: {
        loading: false
    }
} as Meta<typeof Card>