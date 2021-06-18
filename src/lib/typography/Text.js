import React from 'react'
import { Text as T } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Text = props => <T {...props} />

export default Text

Text.defaultProps = {

}

Text.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}