import React from 'react'
import { Text } from '../typography'
import { Box } from '../layout'

const QuoteText = ({
    children,
    ...rest
}) => (
    <Text
        mb={2}
        fontWeight="bold"
        fontSize="4xl"
        maxWidth="640px"
        lineHeight="wide"
        {...rest}
    >
        ”{children}”
    </Text>
)

const QuoteByline = ({
    children,
    ...rest
}) => (
    <Text
        mb={5}
        fontSize="sm"
        maxWidth="640px"
        {...rest}
    >
        {children}
    </Text>
)

const Quote = ({
    children,
    ...rest
}) => (
    <Box
        px={5}
        borderLeft="4px solid rgb(0, 92, 169)"
        borderRight="4px solid rgb(0, 92, 169)"
        {...rest}
    >
        {children}
    </Box>
)

export {
    Quote,
    QuoteText,
    QuoteByline
}