import { Meta, Story } from '@storybook/react'
import { useCallback } from "react"

import FS from './index'
import { FormData } from "./types"
import * as FSTypes from "./types"

export default {
    title: 'Components/FormSystem',
    component: FS.Form,
    argTypes: {
    },
} as Meta<typeof FS.Form>

const Template: Story<FSTypes.Form> = (props) => {
    // const [state, setState] = useState({})

    const customValidationExample1 = useCallback((formData: FormData) => {
        if (formData.street.value === formData.lastname.value) {
            return [{
                fieldName: "firstname",
                involvedFieldNames: ["lastname", "street"],
                type: FSTypes.Validation.Types.Warning,
                text: "Lastname and street should not be the same!"
            }]
        }

        return []
    }, [])

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
                    value: "a"
                },
                nonExistingField: {
                    name: "nonExistingField",
                    value: ""
                }
            }}
            // value={state}
            // onChange={(fieldName: string, value: FormDataValue) => {
            //     if (fieldName === "street") {
            //         setName((currentName) => currentName === "firstname" ? "firstnameeeee" : "firstname")
            //     }
            //     // console.log("onChange callback!")
            //     // setState({
            //     //     ...state,
            //     //     [fieldName]: value + "a",
            //     //     firstname: value
            //     // })
            // }}
            onSubmit={(formData, isValid, validationMessages) => {
                console.log("submit", { formData, isValid, validationMessages })
            }}
        >
            <FS.Validation.Form.Custom
                involvedFieldNames={["firstname", "lastname", "street"]}
                validationFunction={customValidationExample1}
            />
            <FS.Validation.Form.SameValue
                fieldAName={"firstname"}
                fieldBName={"lastname"}
                type={FSTypes.Validation.Types.Warning}
            />
            <FS.Group  inline>
                <FS.Group inline $direction={"vertical"} width={"300px"}>
                    <FS.Field>
                        <FS.Input.Text name={"firstname"}>
                            <FS.Validation.Field.Email />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"secondname"}>
                            <FS.Validation.Field.Email />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Group>
                <FS.Field>
                    <FS.Input.Text name={"lastname"}>
                        <FS.Validation.Field.Email />
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
            secondname: "Secondname",
            lastname: "Lastname",
            street: "Street"
        },
        buttons: {
            submit: "Send"
        }
    }
}
