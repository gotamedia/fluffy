import {
    useState
} from 'react'

import { Story, Meta } from '@storybook/react'

import Button from '../Button'

import Popover from './index'
import { Popover as Component } from './Popover'

import * as Types from './types'

const Template: Story<Types.PopoverProps> = (props) => {
    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)

    const [showPopover, setShowPopover] = useState(false)

    return (
        <div>
            <Button
                ref={setButtonRef}
                onClick={() => setShowPopover(current => !current)}
            >
                {'Toggle popover'}
            </Button>

            <Popover
                {...props}
                show={showPopover}
                onClickOutside={() => setShowPopover(false)}
                anchor={buttonRef}
            >
                <div style={{
                    width: 300,
                    height: 150,
                    backgroundColor: 'lightgreen'
                }}>
                    <p style={{ margin: 0 }}>
                        {'I am inside a popover'}
                    </p>
                </div>
            </Popover>
        </div>
    )
}

export const Basic = Template.bind({})

export default {
    title: 'Developments/Components/Popover',
    component: Component,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.PopoverComponent>