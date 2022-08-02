import React, {
    useState,
    useCallback
} from 'react'

import ListItem from './'
import { ListItemSizes } from './types'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ListItemProps> = (props) => {
    const [selected, setSelected] = useState(false)

    const toggleSelect = useCallback(() => {
        setSelected(current => !current)
    }, [])

    return (
        <ListItem
            {...props}
            selected={selected}
            onSelect={toggleSelect}
        />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/ListItem',
    component: ListItem,
    argTypes: {},
    args: {
        size: ListItemSizes.Normal,
        text: 'List item text',
        subText: 'List item sub-text'
    }
} as Meta<Types.ListItemComponent>