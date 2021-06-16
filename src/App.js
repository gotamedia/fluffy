import React, { useState } from 'react'
import { useNotification } from './lib/feedback'
import { useColorMode } from './lib/hooks'
import { Heading, Text } from './lib/typography'
import { Input, PasswordInput, PinInput, PinInputField, Button, Select, Option, Switch } from './lib/forms'
import { Flex } from './lib/layout'
import { Image } from './lib/media'
import {
    Drawer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from './lib/overlay'
import { useDisclosure } from './lib/hooks'
import { RadioGroup, Radio } from '@chakra-ui/react'

const App = () => {
    const notification = useNotification()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState("xs")
    const [position, setPosition] = useState("right")
    const [notificationTitle, setNotificationTitle] = useState("")
    const [notificationDescription, setNotificationDescription] = useState("")
    const [notificationPosition, setNotificationPosition] = useState("top")
    const { toggleColorMode } = useColorMode()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

    return (
        <Flex p={8} flexDirection="column">
            <Heading mt={6} mb={4}>Menus</Heading>
            <Menu>
                <MenuButton as={Button} w="120px">Tap me</MenuButton>
                <MenuList>
                    <MenuItem>menu item 1</MenuItem>
                    <MenuItem>menu item 2</MenuItem>
                    <MenuItem>menu item 3</MenuItem>
                </MenuList>
            </Menu>

            <Heading mt={6} mb={4}>Drawers</Heading>
            <Flex flexFlow="wrap">
                {sizes.map((size) => (
                    <Button
                    onClick={() => handleClick(size)}
                    key={size}
                    m={2}
                    >{`Open ${size} Drawer`}</Button>
                ))}
            </Flex>

            <Flex flexFlow="wrap">
                <RadioGroup defaultValue={position} onChange={setPosition}>
                    <Flex flexDirection="column">
                        <Radio value="top">Top</Radio>
                        <Radio value="right">Right</Radio>
                        <Radio value="bottom">Bottom</Radio>
                        <Radio value="left">Left</Radio>
                    </Flex>
                </RadioGroup>
            </Flex>

            <Drawer title="test" isOpen={isOpen} onClose={onClose} size={size} position={position}>
                drawer
            </Drawer>

            <Heading mt={6} mb={4}>Typography</Heading>
            <Heading as="h1">h1: Heading</Heading>
            <Heading as="h2">h2: Heading</Heading>
            <Heading as="h3">h3: Heading</Heading>
            <Heading as="h4">h4: Heading</Heading>
            <Heading as="h5">h5: Heading</Heading>
            <Heading as="h6">h6: Heading</Heading>

            <Heading mt={6} mb={4}>Images</Heading>
            <Image
                borderRadius="full"
                boxSize="100"
                src="https://media1.tenor.com/images/e32f7f2d63c9381e092daa4612cd6ab2/tenor.gif"
            />

            <Text mt={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            <Heading mt={10} mb={4}>Color mode</Heading>
            <Switch onChange={event => toggleColorMode(event.target.value ? 'light' : 'dark')} />

            <Heading mt={10} mb={4}>Notifications</Heading>

            <Text mb={6}>Displays a notification on screen for the user. Try it out yourself below 🎉</Text>

            <Heading as="h3" mt={5} mb={3}>Title</Heading>
            <Input value={notificationTitle} onChange={event => setNotificationTitle(event.target.value)} />

            <Heading as="h3" mt={10} mb={3}>Description</Heading>
            <Input value={notificationDescription} onChange={event => setNotificationDescription(event.target.value)} />

            <Heading as="h3" mt={10} mb={3}>Screen position</Heading>
            <Select mb={4} onChange={event => setNotificationPosition(event.target.value)} value={notificationPosition}>
                <Option value="top">top</Option>
                <Option value="top-right">top right</Option>
                <Option value="top-left">top left</Option>
                <Option value="bottom">bottom</Option>
                <Option value="bottom-right">bottom right</Option>
                <Option value="bottom-left">bottom left</Option>
            </Select>

            <Button onClick={() => notification({
                title: notificationTitle,
                description: notificationDescription,
                position: notificationPosition,
                duration: null
            })}>
                trigger notification
            </Button>

            <Heading mt={12} mb={4}>Forms</Heading>

            <Heading as="h3" mt={10} mb={3}>Password input</Heading>
            <PasswordInput placeholder="Ange ditt lösenord" />

            <Heading as="h3" mt={10} mb={3}>Pin input</Heading>
            <Flex width={200} justifyContent="space-between">
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </Flex>
        </Flex>
    )
}

export default App