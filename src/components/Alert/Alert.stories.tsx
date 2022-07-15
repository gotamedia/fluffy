import React from 'react'
import { Story, Meta } from '@storybook/react'

import Alert, { AlertVariants } from './index'
import { Icons } from '../Icon'
import * as Types from './types'

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
    },
} as Meta<typeof Alert>

const Template: Story<Types.AlertProps & {
    headline: string,
    text: string
}> = ({headline, text, ...props}) => {

    return (
        <Alert {...props}>
            <Alert.Headline>
                {headline}
            </Alert.Headline>

            <Alert.Text>
                {text}
            </Alert.Text>

            <Alert.Text>
                {text}
            </Alert.Text>
        </Alert>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    icon: Icons.Info,
    variant: AlertVariants.Sucess,
    headline: 'Ta del av våra användarvillkor',
    text: (
        'Med dataskyddsförordningen GDPR (General Data Protection Regulation) har vi uppdaterat våra användarvillkor' +
        ' för att förbättra din användarupplevelse. Det inkluderar även vilka annonser vi visar för dig.'
    )
}