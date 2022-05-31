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
    const [name, setName] = useState("firstname")

    return (
        <FS.Form
            i18n={props.i18n}
            defaultValue={{
                firstname: {
                    name: "firstname",
                    value: "Lars"
                },
                lastname: {
                    name: "lastname",
                    value: "Bomnüter"
                },
                streeeeeeet: {
                    name: "street",
                    value: "Trollbackevägen"
                }
            }}
            // value={state}
            onChange={(fieldName: string, value: FormDataValue) => {
                if (fieldName === "street") {
                    setName((currentName) => currentName === "firstname" ? "firstnameeeee" : "firstname")
                }
                // console.log("onChange callback!")
                // setState({
                //     ...state,
                //     [fieldName]: value + "a",
                //     firstname: value
                // })
            }}
        >
            <FS.Group>
                <FS.Field>
                    <FS.Input.Text name={name}>
                        <FS.Validation.Email />
                    </FS.Input.Text>
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"lastname"}>
                        <FS.Validation.Email />
                    </FS.Input.Text>
                </FS.Field>
            </FS.Group>
            <FS.Field>
                <FS.Input.Text name={"street"} />
            </FS.Field>
            <FS.Button />
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
