import {
    useRef,
    useState
} from 'react'

import { Story, Meta } from '@storybook/react'

import Button from '../Button'

import Popover from './index'

import * as Types from './types'

const Template: Story<Types.PopoverProps> = ({
    show,
    withPointer,
    backgroundColor,
    ...props
}) => {
    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)
    const [showPopover, setShowPopover] = useState(false)

    const popoverRef = useRef<HTMLDivElement | null>(null)

    return (
        <div style={{ height: "150vh", minWidth: "150vw" }}>
            <Button
                ref={setButtonRef}
                onClick={() => setShowPopover(current => !current)}
            >
                {'Toggle popover'}
            </Button>

            <Popover
                ref={popoverRef}
                {...props}
                show={typeof show === "boolean" ? show : showPopover}
                onClickOutside={() => setShowPopover(false)}
                anchor={buttonRef}
                withPointer={withPointer}
                backgroundColor={backgroundColor}
                onScrollOutside={() => setShowPopover(false)}
            >
                <div
                    style={{
                        width: 300,
                        height: 150
                    }}
                >
                    <p style={{ color: "white", padding: "0px 15px" }}>
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
    component: Popover,
    argTypes: {
    },
    args: {
        backgroundColor : "tomato",
        withPointer: true
    }
} as Meta<Types.PopoverComponent>
