import React from 'react'

import {
    Input as I,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from '@chakra-ui/react'

export {
    InputGroup,
    InputLeftElement,
    InputRightElement
}

const Input = ({label, ...rest}) => (
    <label>
        {label}
        <I {...rest} />
    </label>
)

export default Input