import {
    useEffect,
    useRef,
    useState
} from 'react'

import { Story, Meta } from '@storybook/react'

import Button from '../Button'

import Popover from './index'

import useScrollPosition from '@hooks/useScrollPosition'
import useDidValueChanged from '@hooks/useDidValueChanged'

import * as Types from './types'

const Template: Story<Types.PopoverProps> = ({
    show,
    withPointer,
    backgroundColor,
    preventScrollOutside,
    ...props
}) => {
    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)
    const [showPopover, setShowPopover] = useState(false)
    const position = useScrollPosition()
    const valueChanged = useDidValueChanged(
        showPopover ? position : undefined,
        (prev: typeof position, curr?: typeof position) => [prev, curr].includes(undefined)
    )

    const popoverRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (valueChanged) {
            setShowPopover(false)
        }
    }, [valueChanged])

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
                preventScrollOutside={preventScrollOutside}
                withPointer={withPointer}
                backgroundColor={backgroundColor}
            >
            <div style={{
                    width: 300,
                    height: 150
                }}>
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
        withPointer: true,
        preventScrollOutside: false
    }
} as Meta<Types.PopoverComponent>
