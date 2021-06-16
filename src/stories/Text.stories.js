import { Text } from '../lib/typography'
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({theme: defaultTheme, propTypes: Text.propTypes, defaultProps: Text.defaultProps})

const Story = {
    title: 'Typography/Text',
    component: Text,
    default: 'p',
    argTypes: {
        ...argTypes
    }
}


export default Story

const Template = (args) => {
    return (
        <Text {...args} />
    )
}

export const Paragraph = Template.bind({})
Paragraph.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
}

export const Span = Template.bind({})
Span.args = {
    as: 'span',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}