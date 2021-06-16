import { Heading } from '../lib/typography';
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({theme: defaultTheme, propTypes: Heading.propTypes, defaultProps: Heading.defaultProps})

export default {
    title: 'Typography/Heading',
    component: Heading,
    argTypes: {
        ...argTypes
    }
}

const Template = (args) => (
    <Heading {...args} />
)

export const h1 = Template.bind({})
h1.args = {
    as: 'h1',
    children: 'Heading 1'
}

export const h2 = Template.bind({})
h2.args = {
    as: 'h2',
    children: 'Heading 2'
}

export const h3 = Template.bind({})
h3.args = {
    as: 'h3',
    children: 'Heading 3'
}

export const h4 = Template.bind({})
h4.args = {
    as: 'h4',
    children: 'Heading 4'
}

export const h5 = Template.bind({})
h5.args = {
    as: 'h5',
    children: 'Heading 5'
}

export const h6 = Template.bind({})
h6.args = {
    as: 'h6',
    children: 'Heading 6'
}