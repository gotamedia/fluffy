import React from 'react'
import { Story, Meta } from '@storybook/react'

import Paper from './index'
import Button, { ButtonVariants } from '../Button'

import * as Types from './types'

export default {
    title: 'Components/Paper',
    component: Paper,
    argTypes: {
    },
} as Meta<typeof Paper>

const Template: Story<Types.PaperProps & {
    headline: string,
    text: string
}> = ({headline, text, ...props}) => {
    return (
        <Paper
            image={props.image}
            buttons={props.buttons}
        >
            <Paper.Headline>
                {headline}
            </Paper.Headline>

            <Paper.Text>
                {text}
            </Paper.Text>
        </Paper>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    image: {
        src: "https://cdn.gotamedia.se/applications/nxt/svg/unlock.svg",
        alt: 'i18n.image.alt',
        width: 95,
        height: 112,
    },
    headline: 'Ta del av våra användarvillkor',
    text: (
        'Med dataskyddsförordningen GDPR (General Data Protection Regulation) har vi uppdaterat våra användarvillkor' +
        ' så att det framgår vilka uppgifter vi samlar in från dig – och vad vi använder dem till.' +
        ' När du besöker våra webbplatser och appar samlar vi in uppgifter från dig' +
        ' för att förbättra din användarupplevelse. Det inkluderar även vilka annonser vi visar för dig.'
    ),
    buttons: (
        <>
            <Button variant={ButtonVariants.Outline}>
                {'Mer information'}
            </Button>

            <Button>
                {'Jag förstår'}
            </Button>
        </>
    )
}