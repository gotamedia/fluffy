import styled from 'styled-components'

import Button, {
    ButtonSizes,
    ButtonVariants,
    ButtonVariantTypes
} from './'

import IcomComponent, { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { Icon } from '../Icon'

const Basic: Story<Types.ButtonProps & {
    text: string
}> = ({text, ...props}) => {
    return (
        <Button {...props}>
            {text}
        </Button>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 15px;
    }
`

const WithIcon: Story<Types.ButtonProps & {
    text: string,
    icon: Icon,
}> = ({text, icon, ...props}) => {
    return (
        <Wrapper>
            <Button {...props}>
                <IcomComponent icon={icon} />
                {text}
            </Button>

            <Button {...props}>
                {text}
                <IcomComponent icon={icon} />
            </Button>
        </Wrapper>
    )
}

const WithIconStory = WithIcon.bind({})
WithIconStory.storyName = 'WithIcon'

export {
    BasicStory,
    WithIcon
}

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {},
    args: {
        size: ButtonSizes.Normal,
        variant: ButtonVariants.Primary,
        variantType: ButtonVariantTypes.Default,
        text: 'Click me!',
        icon: Icons.Eye,
        disabled: false
    }
} as Meta<typeof Button>