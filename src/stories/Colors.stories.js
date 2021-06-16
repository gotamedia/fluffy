import { Heading, Text } from '../lib/typography'
import { Flex, Box } from '../lib/layout'
import { defaultTheme } from '../lib/theme'

export const DefaultSwatches = () => {
    const colors = defaultTheme.colors

    return (
        <Flex flex="1" flexDirection="column">
            {Object.keys(colors).map(colorName => {
                const color = colors[colorName]

                return (
                    <Flex m={4}>
                        <Flex width="200px">
                            <Text as="span" fontSize="xl" fontFamily="Helvetica">{colorName}</Text>
                        </Flex>

                        <Flex flexDirection="column" flex="1">
                            <Flex
                                flex="1"
                                borderRadius="xl"
                                overflow="hidden"
                                boxShadow="base"
                                mb={2}
                            >
                                {typeof color === "string" ? (
                                    <Box bg={color} w="100%" height="60px"></Box>
                                ) : Object.keys(color).map(nuance => {
                                    return (
                                        <Flex width="100%" height="60px" flexDirection="column">
                                            <Flex bg={color[nuance]} width="100%" height="100%"></Flex>
                                        </Flex>
                                    )
                                })}
                            </Flex>

                            <Flex>
                                {typeof color === "string" ? (
                                    <Text as="span" fontSize="sm">{colorName}</Text>
                                ) : Object.keys(color).map(nuance => {
                                    return (
                                        <Flex width="100%" height="100%" flexDirection="column">
                                            <Text fontSize="sm">{`${colorName}.${nuance}`}</Text>
                                        </Flex>
                                    )
                                })}
                            </Flex>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default {
    title: 'Colors/Default Swatches',
    component: DefaultSwatches,
    parameters: {
        controls: {
            disabled: true
        },
        actions: {
            disabled: false
        }
    }
}