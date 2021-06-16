import { Link as L } from '../lib/navigation'
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({theme: defaultTheme, propTypes: L.propTypes, defaultProps: L.defaultProps})

const Story = {
    title: 'Navigation/Link',
    component: L,
    argTypes: {
        ...argTypes,
        children: 'My link',
        href: 'https://www.gotamedia.se/'
    }
}


export default Story

export const Link = (args) => {
    return (
        <L {...args} />
    )
}