import { useState } from 'react'
import styled from 'styled-components'

import Input, {
    InputVariants,
    InputVariantTypes,
    InputSizes,
    InputStates
} from '../Input'
import IconButton from '../IconButton'
import Button from '../Button'
import Icon, {
    Icons,
    IconVariants
} from '../Icon'
import InputGroup from './'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <InputGroup {...props} >
            <Input
                value={inputValue}
                onChange={handlOnChange}
                placeholder={'Placeholder'}
            />
        </InputGroup>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    > div {
        margin-bottom: 15px;
    }
`

const WithIcon: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <Icon
                    icon={Icons.Photo}
                    variant={IconVariants.Solid}
                />

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />

                <Icon
                    icon={Icons.Trash}
                    variant={IconVariants.Solid}
                />
            </InputGroup>
        </Wrapper>
    )
}

const WithIconButton: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <IconButton icon={Icons.Trash} />

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />

                <IconButton icon={Icons.MagnifyingGlass} />
            </InputGroup>
        </Wrapper>
    )
}

WithIconButton.storyName = 'With IconButton'

const WithButton: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <Button>
                    {'Click me!'}
                </Button>

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Placeholder'}
                />

                <Button>
                    {'Search'}
                </Button>
            </InputGroup>
        </Wrapper>
    )
}

export {
    BasicStory,
    WithIcon,
    WithIconButton,
    WithButton
}

export default {
    title: 'Components/InputGroup',
    component: InputGroup,
    argTypes: {},
    args: {
        disabled: false,
        variant: InputVariants.Primary,
        variantType: InputVariantTypes.Default,
        size: InputSizes.Normal,
        state: InputStates.Default
    }
} as Meta<typeof InputGroup>