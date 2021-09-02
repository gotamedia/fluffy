import React from 'react'
import { Heading as H } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Heading = props => {
    return <H {...props} variant={props.as || 'h2'} />
}

export default Heading

Heading.defaultProps = {
    textAlign: 'left',
    fontWeight: 'black',
    lineHeight: 'normal',
    letterSpacing: 'normal'
}

Heading.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}