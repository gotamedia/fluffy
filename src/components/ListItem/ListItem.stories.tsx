import {
    useState,
    useCallback
} from 'react'

import ListItem from './'
import { ListItemTypes } from './types'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ListItemProps> = (props) => {
    const [selected, setSelected] = useState(props.selected)

    const toggleSelect = useCallback(() => {
        setSelected(current => !current)
    }, [])

    return (
        <ListItem
            {...props}
            style={{ width: 250 }}
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
    title: 'Components/ListItem',
    component: ListItem,
    argTypes: {},
    args: {
        text: 'List item text',
        subText: '',
        type: ListItemTypes.Normal,
        targeted: false,
        selected: false,
        value: {},
        scrollOnTargeted: true,
        icon: undefined,
        actionIcon: undefined
    }
} as Meta<Types.ListItemComponent>