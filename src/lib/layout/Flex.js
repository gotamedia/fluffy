import React from 'react'
import { Flex as F } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Flex = props => <F {...props} />

export default Flex

Flex.defaultProps = {}

Flex.propTypes = {
    ...propTypes.layout,
    ...propTypes.color,
    ...propTypes.space
}
