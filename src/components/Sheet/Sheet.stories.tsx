import React, { useRef } from 'react'

import { Story, Meta } from '@storybook/react'

import Sheet from './index'
import Button from '../Button'

import * as Types from './types'

const Template: Story<Types.SheetProps> = (props) => {
    const sheetRef = useRef<Types.SheetRef>()

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                width: 500
            }}
        >
            <Button onClick={() => sheetRef.current?.open()}>
                {'Open sheet'}
            </Button>

            <Button onClick={() => sheetRef.current?.close()}>
                {'Close sheet'}
            </Button>

            <div
                style={{
                    width: 500,
                    height: 500,
                    background: 'lightgray',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Sheet
                    {...props}
                    style={{
                        background: '#fb96cb',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}
                    ref={sheetRef}
                >
                    {'I am a sheet 📃'}
                </Sheet>
            </div>
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/Sheet',
    component: Sheet,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.SheetComponent>