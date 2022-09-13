import {
    useState,
    useCallback
} from 'react'

import { List } from './List'

import ListItem from '../ListItem'
import { ListItemTypes } from '../ListItem/types'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ListProps> = (props) => {
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleOnSelect = useCallback((value) => {
        setSelectedItems(current => {
            if (current.includes(value)) {
                return current.filter(i => i !== value)
            } else {
                return [
                    ...current,
                    value
                ]
            }
        })
    }, [])

    const isTypeSelect = props?.type === ListItemTypes.Select

    return (
        <List
            {...props}
            onSelect={isTypeSelect ? handleOnSelect : undefined}
        >
            {
                [...new Array(20)].map((i, idx) => {
                    return (
                        <ListItem
                            key={idx}
                            text={`List item text / ${idx + 1}`}
                            value={idx + 1}
                            selected={isTypeSelect ? selectedItems.includes(idx + 1) : undefined}
                            subText={`List item sub-text / ${idx + 1}`}
                        />
                    )
                })
            }
        </List>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/List',
    component: List,
    argTypes: {},
    args: {
        
    }
} as Meta<Types.ListComponent>