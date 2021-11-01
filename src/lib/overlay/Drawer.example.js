import { useState } from 'react'
import useDisclosure from '../hooks/useDisclosure'
import Drawer, {
    DrawerHeader,
    DrawerBody,
    DrawerFooter
} from './Drawer'

import { Button, Input, Select, Option } from '../forms'
import { Heading, Text } from '../typography'

import Flex from '../layout/Flex'

const Example = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState("xs")
    const [position, setPosition] = useState("right")

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

    return (
        <>
            <Flex flexFlow="wrap">
                {sizes.map((size) => (
                    <Button
                        onClick={() => handleClick(size)}
                        key={size}
                        m={2}
                    >{`Open ${size} Drawer`}</Button>
                ))}
            </Flex>

            <Heading as="h3" mt={10} mb={3}>Position</Heading>
            <Select mb={4} onChange={event => setPosition(event.target.value)} value={position}>
                <Option value="top">top</Option>
                <Option value="right">right</Option>
                <Option value="bottom">bottom</Option>
                <Option value="left">left</Option>
            </Select>

            <Drawer title="test" isOpen={isOpen} onClose={onClose} size={size} position={position}>
                <DrawerHeader>Drawer header text</DrawerHeader>

                <DrawerBody>
                    Content for a <strong>{position}</strong> positioned drawer size <strong>{size}</strong>
                </DrawerBody>

                <DrawerFooter>Drawer footer text</DrawerFooter>
            </Drawer>
        </>
    )
}

export default Example