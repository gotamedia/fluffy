import { Image as Img } from '../lib/media'
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({theme: defaultTheme, propTypes: Img.propTypes, defaultProps: Img.defaultProps})

const Story = {
    title: 'Media/Image',
    component: Img,
    argTypes: {
        ...argTypes
    }
}


export default Story

const Template = (args) => {
    return (
        <Img {...args} />
    )
}

export const Basic = Template.bind({})
Basic.args = {
    src: 'https://media1.tenor.com/images/e32f7f2d63c9381e092daa4612cd6ab2/tenor.gif'
}

export const Rounded = Template.bind({})
Rounded.args = {
    src: 'https://media1.tenor.com/images/e32f7f2d63c9381e092daa4612cd6ab2/tenor.gif',
    borderRadius: 'full'
}