import {
    useState,
    useCallback
} from 'react'

import { Story, Meta } from '@storybook/react'

import TagsInput from './index'

import * as Types from './types'

const Template: Story<Types.TagsInputProps> = (props) => {
    const [tags, setTags] = useState(props.tags)

    const handleOnChange = useCallback((items) => {
        setTags(items.filter(i => {
            if (i.isNew) {
                return i.selected
            } else {
                return i
            }
        }))
    }, [])

    const handleOnCreate = useCallback((value: string) => {
        setTags(current => {
            const newTagId = value
                .trim()
                .toLowerCase()
                .replace(/\s/g, '-')

            if (current.find(i => i.id === newTagId)) {
                return current
            } else {
                return [
                    ...current,
                    {
                        id: newTagId,
                        label: value,
                        selected: true,
                        isNew: true
                    }
                ]
            }
        })
    }, [])

    return (
        <div>
            <TagsInput
                {...props}
                tags={tags}
                onChange={handleOnChange}
                onCreate={handleOnCreate}
            />
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/TagsInput',
    component: TagsInput,
    argTypes: {
    },
    args: {
        tags: [
            {
                label: 'Rock',
                id: 'rock',
                selected: true
            },
            {
                label: 'Paper',
                id: 'paper',
                selected: true
            },
            {
                label: 'Scissor',
                id: 'scissor',
                selected: true
            },
            {
                label: 'Fluffy',
                id: 'fluffy',
                selected: true
            }
        ]
    }
} as Meta<Types.TagsInputComponent>