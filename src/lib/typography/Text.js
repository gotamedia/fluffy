import React from 'react'
import { Text as T } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Text = props => <T {...props} />

export default Text

Text.defaultProps = {
    mb: 3,
    lineHeight: "wide"
}

Text.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}