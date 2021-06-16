import { Box as B } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Box = props => {
    return (
        <B {...props} />
    )
}

export default Box

Box.defaultProps = {}

Box.propTypes = {
    ...propTypes.layout,
    ...propTypes.color,
    ...propTypes.space
}
