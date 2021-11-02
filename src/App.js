import React, { lazy, Suspense, useState } from 'react'
import examples from './examples.json'
import { Heading } from './lib/typography'
import { Button } from './lib/forms'
import { Flex } from './lib/layout'
import { Tabs, TabList, TabPanels, TabPanel, Tab } from './lib/overlay'
import Highlight, { defaultProps } from 'prism-react-renderer'

const importExampleComponent = filepath => lazy(() => import(`${filepath}`))

const Code = ({ code, language = "jsx" }) => {
    return (
        <Flex mt="4" width="100%" flex="1">
            <Highlight {...defaultProps} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{...style, padding: 10, width: "100%"}}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </Flex>
    )
}

const TabContent = ({ exampleKey, categoryKey }) => {
    const [displayCodeExample, setDisplayCodeExample] = useState(false)
    const Loading = ({children}) => <div>loading {children}</div>
    const Example = importExampleComponent(examples[categoryKey][exampleKey].path)

    return (
        <Flex key={exampleKey} flexDirection="column" mb="5" p="4" bg="gray.50">
            <Heading as="h3" mb="4">{exampleKey}</Heading>

            <Suspense fallback={<Loading>{exampleKey}</Loading>}>
                <Example />

                <Flex mt="5" flexDirection="column" width="100%">
                    <Button size="sm" width="120px" onClick={() => setDisplayCodeExample(!displayCodeExample)}>view example</Button>

                    {displayCodeExample && <Code code={examples[categoryKey][exampleKey].jsxString} />}
                </Flex>
            </Suspense>

        </Flex>
    )
}

const App = () => (
    <Flex p={8} flexDirection="column">
        <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
                {Object.keys(examples).map(categoryKey => <Tab>{categoryKey}</Tab>)}
            </TabList>

            <TabPanels>
                {Object.keys(examples).map(categoryKey => (
                    <TabPanel key={categoryKey}>
                        {Object.keys(examples[categoryKey]).map(exampleKey => (
                            <TabContent exampleKey={exampleKey} categoryKey={categoryKey} />
                        ))}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    </Flex>
)

export default App