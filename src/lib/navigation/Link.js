import React from 'react'
import { Link as L } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Link = props => <L {...props} />

export default Link

Link.defaultProps = {}

Link.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}
