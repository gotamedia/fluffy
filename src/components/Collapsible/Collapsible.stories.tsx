import { useCallback, useState } from "react"

import Collapsible from "./index"

import Button from "../Button/"
import Image from "../Image/"
import * as Types from "./types"

import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.CollapsibleProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>()
    const onClickHandler = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    return (
        <div>
            <Button onClick={onClickHandler}>{"Collapsible"}</Button>
            <Collapsible open={isOpen}>
                <Image src={"https://universaldork.files.wordpress.com/2011/11/wengweng_1.jpg"} />
            </Collapsible>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = "Basic"

export default {
    title: "Components/Collapsible",
    component: Collapsible,
} as Meta<Types.CollapsibleComponent>
