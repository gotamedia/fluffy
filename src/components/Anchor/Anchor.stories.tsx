import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react'

import Anchor from './index'

import * as Types from './types'

const AnchoredItem = ({ name }) => {
    return (
        <div
            style={{
                width: 200,
                height: 100,
                padding: 10,
                backgroundColor: 'lightcyan'
            }}
        >
            <p>
                {`Yes, Hello! I am anchored to "${name}" ⚓️`}
            </p>
        </div>
    )
}

const Template: Story<Types.AnchorProps> = (props) => {
    const [button1Ref, setButton1Ref] = useState<HTMLButtonElement | null>(null)
    const [button2Ref, setButton2Ref] = useState<HTMLButtonElement | null>(null)
    const [button3Ref, setButton3Ref] = useState<HTMLButtonElement | null>(null)
    const [button4Ref, setButton4Ref] = useState<HTMLButtonElement | null>(null)
    const [button5Ref, setButton5Ref] = useState<HTMLButtonElement | null>(null)

    return (
        <div>
            <button
                ref={setButton1Ref}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                {'I am Button 1!'}
            </button>

            <button
                ref={setButton2Ref}
                style={{ position: 'absolute', top: 0, right: 0 }}
            >
                {'I am Button 2!'}
            </button>

            <button
                ref={setButton3Ref}
                style={{ position: 'absolute', bottom: 0, right: 0 }}
            >
                {'I am Button 3!'}
            </button>

            <button
                ref={setButton4Ref}
                style={{ position: 'absolute', bottom: 0, left: 0 }}
            >
                {'I am Button 4!'}
            </button>

            <button
                ref={setButton5Ref}
                style={{ position: 'absolute', top: 200, left: 500 }}
            >
                {'I am Button 5!'}
            </button>

            <Anchor
                {...props}
                style={{ position: 'absolute' }}
                anchor={button1Ref}
            >
                <AnchoredItem name={'Button 1'}/>
            </Anchor>
            
            <Anchor
                {...props}
                style={{ position: 'absolute' }}
                anchor={button2Ref}
            >
                <AnchoredItem name={'Button 2'}/>
            </Anchor>

            <Anchor
                {...props}
                style={{ position: 'absolute' }}
                anchor={button3Ref}
            >
                <AnchoredItem name={'Button 3'}/>
            </Anchor>

            <Anchor
                {...props}
                style={{ position: 'absolute' }}
                anchor={button4Ref}
            >
                <AnchoredItem name={'Button 4'}/>
            </Anchor>

            <Anchor
                {...props}
                style={{ position: 'absolute' }}
                anchor={button5Ref}
            >
                <AnchoredItem name={'Button 5'}/>
            </Anchor>
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/Anchor',
    component: Anchor,
    argTypes: {
    },
    args: {
        padding: 0,
        offset: {
            x: 0,
            y: 0
        }
    }
} as Meta<Types.AnchorComponent>