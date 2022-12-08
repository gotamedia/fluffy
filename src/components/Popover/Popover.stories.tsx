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

const Template: Story<Types.PopoverProps> = (props) => {
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
                show={showPopover}
                onClickOutside={() => setShowPopover(false)}
                anchor={buttonRef}
                preventScrollOutside={false}
                withPointer
                pointerColor='lightgreen'
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
    component: Popover,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.PopoverComponent>
