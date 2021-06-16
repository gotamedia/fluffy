import { Box as B } from '../lib/layout'
import { defaultTheme } from '../lib/theme'
import { getArgTypes } from './controls'

let argTypes = getArgTypes({
    theme: defaultTheme,
    propTypes: B.propTypes,
    defaultProps: B.defaultProps,
    exclude: []
})

console.log({argTypes})

delete argTypes.color

export default {
    title: 'Layout/Box',
    component: B,
    argTypes: {
        ...argTypes
    }
}

export const Empty = props => (
    <B {...props} />
)

export const OneItem = props => (
    <B {...props}>
        <B width="50%" height="50%" bg="white" />
    </B>
)