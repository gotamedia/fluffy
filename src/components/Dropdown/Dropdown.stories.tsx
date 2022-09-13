import { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { Dropdown } from './Dropdown'

import ListItem from '../ListItem'

import * as Types from './types'

const Basic: Story<Types.DropdownProps> = (props) => {
    const [selectedItem, setSelectedItem] = useState('Select a value')

    return (
        <div>
            <p>
                {selectedItem}
            </p>

            <Dropdown
                {...props}
                value={selectedItem}
                onChange={setSelectedItem}
            >
                {
                    [...new Array(5)].map((i, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                value={`Dropdown list item ${idx + 1}`}
                                text={`Dropdown list item ${idx + 1}`}
                            />
                        )
                    })
                }
            </Dropdown>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'
BasicStory.args = {
    listProps: {
        border: 'full'
    }
}

const Select: Story<Types.DropdownProps> = (props) => {
    const [selectedItem, setSelectedItem] = useState('Select a value')

    return (
        <div>
            <p>
                {selectedItem}
            </p>

            <Dropdown
                {...props}
                value={selectedItem}
                onChange={setSelectedItem}
            >
                {
                    [...new Array(5)].map((i, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                value={`Dropdown list item ${idx + 1}`}
                                text={`Dropdown list item ${idx + 1}`}
                            />
                        )
                    })
                }
            </Dropdown>
        </div>
    )
}

export const SelectStory = Select.bind({})
SelectStory.storyName = 'Marked selected'
SelectStory.args = {
    listProps: {
        border: 'full',
        type: 'select'
    }
}

export default {
    title: 'Developments/Components/Dropdown',
    component: Dropdown,
    argTypes: {
    },
    args: {
        label: 'Open'
    }
} as Meta<Types.DropdownComponent>