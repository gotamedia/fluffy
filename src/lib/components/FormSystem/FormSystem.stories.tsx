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
                    value: "Last"
                },
                secondname: {
                    name: "secondname",
                    value: "Sec"
                },
                street: {
                    name: "street",
                    value: "str"
                }
            }}
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
                        <FS.Input.Text name={"secondname"} disabled>
                            <FS.Validation.Field.Email type={FSTypes.Validation.Types.Warning} />
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
                <FS.Input.Text name={"street"}>
                    <FS.Validation.Field.Email type={FSTypes.Validation.Types.Warning} />
                </FS.Input.Text>
            </FS.Field>

            <div>Fields by state</div>

            <FS.Field>
                <FS.Input.Text name={"default"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"disabled"} disabled />
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"readOnly"} readOnly />
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"error"}>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Error} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"warning"}>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Warning} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"success"}>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Success} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"hint"}>
                    <FS.Validation.Field.Hint i18n={{ text: "This is a hint." }} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"multiple1"}>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Warning} />
                    <FS.Validation.Field.Hint i18n={{ text: "This is a hint." }} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Error} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Success} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"multiple2"} disabled>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Warning} />
                    <FS.Validation.Field.Hint i18n={{ text: "This is a hint." }} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Error} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Success} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"multiple3"} readOnly>
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Warning} />
                    <FS.Validation.Field.Hint i18n={{ text: "This is a hint." }} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Error} />
                    <FS.Validation.Field.Required type={FSTypes.Validation.Types.Success} />
                </FS.Input.Text>
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
            street: "Street",
            default: "Default",
            disabled: "Disabled",
            readOnly: "ReadOnly",
            error: "Error",
            warning: "Warning",
            success: "Success",
            hint: "Hint",
            multiple1: "Multiple (Error/Warning/Success/Hint)",
            multiple2: "Multiple (Disabled/Error/Warning/Success/Hint)",
            multiple3: "Multiple (ReadOnly/Error/Warning/Success/Hint)"
        },
        buttons: {
            submit: "Send"
        }
    }
}
