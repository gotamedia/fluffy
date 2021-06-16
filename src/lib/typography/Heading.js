import React from 'react'
import useColorModeValue from '../hooks/useColorModeValue'
import { Heading as H } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Heading = props => {
    const color = useColorModeValue('heading.light', 'heading.dark')

    return <H color={color} {...props} variant={props.as || 'h2'} />
}

export default Heading

Heading.defaultProps = {
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: 'normal'
}

Heading.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}