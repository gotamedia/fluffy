import React, { useCallback, useState } from "react"
import { Meta } from "@storybook/react"

import Button from "../Button/"
import Image from "../Image/"
import * as Types from "./types"

import Collapsible from "./index"

const Basic = () => {
	const [isOpen, setIsOpen] = useState(false)
	const onClickHandler = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	return (
		<div>
			<Button onClick={onClickHandler}>{"Collapsible"}</Button>
			<Collapsible open={isOpen}>
				<Image
                    src={
						"https://universaldork.files.wordpress.com/2011/11/wengweng_1.jpg"
                    }
					/>
			</Collapsible>
		</div>
	)
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = "Basic"

export default {
	title: "Developments/Components/Collapsible",
	component: Collapsible
} as Meta<Types.Collapsible>
