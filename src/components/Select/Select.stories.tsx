import {
    useState,
    useCallback
} from 'react'

import { Story, Meta } from '@storybook/react'

import Select, {
    SelectTypes,
    SelectStates
} from './index'

import type * as Types from './types'

const BASIC_ITEMS = ['Rock', 'Paper', 'Scissor', 'Fluffy'].map(i => {
    return {
        id: i,
        text: i,
        label: i,
        selected: false
    }
})

const NESTED_ITEMS = [...new Array(5)].map((i, mainIndex) => {
    return {
        id: `main-item-${mainIndex + 1}`,
        text: `Option / ${mainIndex + 1}`,
        label: `Option / ${mainIndex + 1}`,
        selected: false,
        nested: [...new Array(5)]
            .map((k, nestedIndex) => {
                return {
                    parentId: `main-item-${mainIndex + 1}`,
                    id: `nested-item-${nestedIndex + 1}`,
                    text: `Nested / ${mainIndex +1} - ${nestedIndex + 1}`,
                    label: `Nested / ${mainIndex +1} - ${nestedIndex + 1}`,
                    subText: `Nested / ${mainIndex +1} - ${nestedIndex + 1}`,
                    selected: false
                }
            })
    }
})

const Basic: Story<Types.SelectProps> = (props) => {
    const [items, setItmes] = useState(BASIC_ITEMS)

    const handleOnSelect = useCallback((updatedItems: any) => {
        setItmes(updatedItems)
    }, [])

    return (
        <Select
            {...props}
            items={items}
            onChange={handleOnSelect}
        />
    )
}

const BasicNested: Story<Types.SelectProps> = (props) => {
    const [items, setItmes] = useState([...NESTED_ITEMS])

    const handleOnChange = useCallback((updatedItems: any[]) => {
        setItmes(updatedItems)
    }, [])

    return (
        <div>
            <Select
                {...props}
                items={items}
                onChange={handleOnChange}
            />
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
    width: 200,
    isMultiSelect: true,
    type: SelectTypes.Select
}

export const FilterSelectStory = Basic.bind({})
FilterSelectStory.storyName = 'With filter'
FilterSelectStory.args = {
    width: 200,
    showFilter: true,
    isMultiSelect: true,
    type: SelectTypes.Select
}

export const FooterSelectStory = Basic.bind({})
FooterSelectStory.storyName = 'With Footer'
FooterSelectStory.args = {
    width: 200,
    isMultiSelect: true,
    showResetButton: true,
    showApplyButton: true,
    type: SelectTypes.Select
}

export const BasicNestedStory = BasicNested.bind({})
BasicNestedStory.storyName = 'Nested items'
BasicNestedStory.args = {
    isMultiSelect: true,
    type: SelectTypes.Checkbox
}

export const FullStory = BasicNested.bind({})
FullStory.storyName = 'Full'
FullStory.args = {
    isMultiSelect: true,
    showFilter: true,
    showResetButton: true,
    showApplyButton: true,
    type: SelectTypes.Checkbox
}

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
    },
    args: {
        placeholder: 'Play',
        type: SelectTypes.Normal,
        state: SelectStates.Default,
        disabled: false,
        showFilter: false,
        showResetButton: false,
        showApplyButton: false
    }
} as Meta<Types.SelectComponent>