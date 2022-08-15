import React from 'react'

import { Story, Meta } from '@storybook/react'

import FocusTrap from './index'
import Button from '../Button'
import Input from '../Input'

import * as Types from './types'

const Template: Story<Types.FocusTrapProps> = (props) => {
    return (
        <div>                        
            <FocusTrap
                {...props}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    width: 300
                }}
            >
                <Button>
                    {'Button'}
                </Button>

                <Button>
                    {'Button'}
                </Button>

                <Input defaultValue={'Input'} />

                <Button>
                    {'Button'}
                </Button>

                <Input defaultValue={'Input'} />
            </FocusTrap>
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/FocusTrap',
    component: FocusTrap,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.FocusTrapComponent>