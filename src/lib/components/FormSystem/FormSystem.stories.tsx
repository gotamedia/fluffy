import { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import FS from './index'
import { FormDataValue } from "./types"
import * as FSTypes from './types'

export default {
    title: 'Components/FormSystem',
    component: FS.Form,
    argTypes: {
    },
} as Meta<typeof FS.Form>

const Template: Story<FSTypes.Form> = (props) => {
    const [state, setState] = useState({})

    return (
        <FS.Form
            i18n={props.i18n}
            defaultValue={{ firstname: "Lars", lastname: "Bomnüter", streeet: "Trollbackevägen" }}
            // value={state}
            onChange={(fieldName: string, value: FormDataValue) => {
                console.log("onChange callback!")
                setState({
                    ...state,
                    [fieldName]: value + "a",
                    firstname: value
                })
            }}
        >
            <FS.Group>
                <FS.Field>
                    <FS.Input.Text name={"firstname"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"lastname"} />
                </FS.Field>
            </FS.Group>
            <FS.Field>
                <FS.Input.Text name={"street"} />
            </FS.Field>
            <FS.Button />
            {/*<input type={"text"} name={"test"} value={"asd"} />*/}
        </FS.Form>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    i18n: {
        fields: {
            firstname: "Firstname",
            lastname: "Lastname",
            street: "Street"
        },
        buttons: {
            submit: "Send"
        }
    }
}
