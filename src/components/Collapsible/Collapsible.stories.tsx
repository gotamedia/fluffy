import { Meta } from "@storybook/react"
import React, { useCallback, useState } from "react"
import Button from "../Button/"
import Image from "../Image/"
import Component from "./index"
import * as Types from "./types"

const Basic = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    return (
        <div>
            <Button onClick={onClickHandler}>{"test"}</Button>
            <Component {...props} open={isOpen}>
                <Image src={"https://universaldork.files.wordpress.com/2011/11/wengweng_1.jpg"} />
            </Component>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = "Basic"

export default {
    title: "Developments/Components/Collapsible",
    component: Component,
    argTypes: {},
} as Meta<Types.Collapsible>
