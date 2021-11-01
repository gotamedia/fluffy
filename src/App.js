import React, { lazy, Suspense } from 'react'
import examples from './examples.json'
import { Heading, Text } from './lib/typography'
import { Flex } from './lib/layout'
import { Tabs, TabList, TabPanels, TabPanel, Tab } from './lib/overlay'
import { Link } from './lib/navigation'

const importExampleComponent = filepath => lazy(() => import(`${filepath}`))

const App = () => {
    const Loading = ({children}) => <div>loading {children}</div>

    return (
        <Flex p={8} flexDirection="column">
            <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                    {Object.keys(examples).map(categoryKey => <Tab>{categoryKey}</Tab>)}
                </TabList>

                <TabPanels>
                    {Object.keys(examples).map(categoryKey => (
                        <TabPanel key={categoryKey}>
                            {Object.keys(examples[categoryKey]).map(exampleKey => {
                                const Component = importExampleComponent(examples[categoryKey][exampleKey])
                                const repositoryUrl = `https://bitbucket.org/gotamedia/fluffy/src/trunk/src/lib/${categoryKey}/${exampleKey}.js`

                                return (
                                    <Flex key={exampleKey} flexDirection="column" mb="10">
                                        <Heading as="h3">{exampleKey}</Heading>
                                        <Link href={repositoryUrl} mb={5} target="_blank">
                                            <Text fontSize="sm">component at Bitbucket</Text>
                                        </Link>

                                        <Suspense fallback={<Loading>{exampleKey}</Loading>}>
                                            <Component />
                                        </Suspense>

                                    </Flex>
                                )
                            })}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default App


