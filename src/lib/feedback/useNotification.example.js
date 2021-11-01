import useNotification from './useNotification'
import { useState } from 'react'
import { Button, Input, Select, Option } from '../forms'
import { Heading, Text } from '../typography'

const Example = () => {
    const notification = useNotification()
    const [notificationTitle, setNotificationTitle] = useState("")
    const [notificationDescription, setNotificationDescription] = useState("")
    const [notificationPosition, setNotificationPosition] = useState("top")

    return (
        <>
            <Text mb={6}>Displays a notification on screen for the user.</Text>

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
        </>
    )
}

export default Example