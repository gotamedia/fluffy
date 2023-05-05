import UnstyledCard from "@components/Card"
import { Meta, Story } from "@storybook/react"
import React from "react"
import styled from "styled-components"
import Ribbon from "./"
import * as Types from "./types"

const Card = styled(UnstyledCard)`
  width: calc(100% - 8px);
  overflow: initial;
`

const Basic: Story<Types.RibbonProps & {
    text: string
}> = ({ text, ...props }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Image
                    alt={'fluffy-image'}
                    src={'https://media0.giphy.com/media/DTLzZIeBh33S8/giphy.gif'}
                />
                <Ribbon {...props}>
                    {text}
                </Ribbon>
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
    title: 'Components/Ribbon',
    component: Ribbon,
    argTypes: {},
    args: {
        background: '#FFED00',
        color: '#3C2814',
        fold: undefined,
        foldColor: '#D4C60A',
        side: 'right',
        text: 'Ribbon',
        top: [20, 40, 60]
    }
} as Meta<typeof Ribbon>
