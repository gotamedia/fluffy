import React from 'react'
import { Story, Meta } from '@storybook/react'

import Papper from './index'
import * as Types from './types'

export default {
    title: 'Components/Papper',
    component: Papper,
    argTypes: {
    },
} as Meta<typeof Papper>

const Template: Story<Types.PapperProps & {
    headline: string,
    text: string
}> = ({headline, text, ...props}) => {
    return (
        <Papper
            image={props.image}
            buttons={props.buttons}
        >
            <Papper.Headline>
                {headline}
            </Papper.Headline>

            <Papper.Text>
                {text}
            </Papper.Text>
        </Papper>
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
            <button>
                {'Button 1'}
            </button>

            <button>
                {'Button 2'}
            </button>
        </>
    )
}