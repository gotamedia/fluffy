import React, {
    useState,
    useCallback
} from 'react'

import { Story, Meta } from '@storybook/react'

import Select from './index'
import ListItem from '../ListItem'

import * as Types from './types'

const Basic: Story<Types.SelectProps> = (props) => {
    const [selectedValues, setSelectedValues] = useState<any[]>([])

    const handleOnSelect = useCallback((item: any) => {
        setSelectedValues(current => {
            if (current.map(i => i.value).includes(item.value)) {
                return current.filter(i => i.value !== item.value)
            } else {
                if (props.isMultiSelect) {
                    return [
                        ...current,
                        item
                    ]
                } else {
                    return [item]
                }
            }
        })
    }, [props.isMultiSelect])

    return (
        <div>
            <Select
                {...props}
                selected={selectedValues}
                onSelect={handleOnSelect}
            >
                {
                    ['Rock', 'Paper', 'Scissor', 'Fluffy'].map((i, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                value={i}
                                text={i}
                            />
                        )
                    })
                }
            </Select>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'
BasicStory.args = {
    
}

export const MultiSelectStory = Basic.bind({})
MultiSelectStory.storyName = 'Multi select'
MultiSelectStory.args = {
    isMultiSelect: true,
    width: 250
}

export default {
    title: 'Developments/Components/Select',
    component: Select,
    argTypes: {
    },
    args: {
        placeholder: 'Play'
    }
} as Meta<Types.SelectComponent>