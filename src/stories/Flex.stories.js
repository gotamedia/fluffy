import { Flex as F } from '../lib/layout'
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({
    theme: defaultTheme,
    propTypes: F.propTypes,
    defaultProps: F.defaultProps,
    exclude: []
})

console.log("flex argTypes", argTypes)

delete argTypes.color

export default {
    title: 'Layout/Flex',
    component: F,
    argTypes: {
        ...argTypes
    }
}

export const Empty = props => (
    <F {...props} />
)

export const OneItem = props => (
    <F {...props}>
        <F flex={0.5} bg="white" />
    </F>
)