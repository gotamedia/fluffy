import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import type * as Types from "../../../types"

const SameValueTemplate: Story<Types.Component.Validation.Form.SameValue> = (props) => {
    const onCancel: Types.FormContext.Events.onCancel = useCallback((...props) => {
        console.log("onCancel", props)
    }, [])

    const onChange: Types.FormContext.Events.onChange = useCallback((...props) => {
        console.log("onChange", props)
    }, [])

    const onSubmit: Types.FormContext.Events.onSubmit = useCallback((...props) => {
        console.log("onSubmit", props)
        props[3]()
    }, [])

    return (
        <FS.Form
            i18n={{
                fields: {
                    checkbox: "Checkbox label",
                    switch: "Switch label",
                    text1: "Text1 label",
                    text2: "Text2 label",
                    text3: "Text3 label",
                    text4: "Text4 label",
                    text5: "Text5 label",
                    select: "Select label",
                    number: "Number label",
                    radio: "RadioGroup label"
                },
                buttons: {
                    cancel: "Tillbaka",
                    delete: "Radera",
                    submit: "Spara"
                }
            }}
            onCancel={onCancel}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Validation.Form.SameValue {...props} />
            <FS.Group>
                <FS.Validation.Form.SameValue fieldAName={"checkbox"} fieldBName={"switch"} />
                <FS.Field>
                    <FS.Input.Checkbox name={"checkbox"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Switch name={"switch"} />
                </FS.Field>
            </FS.Group>
            <FS.Group>
                <FS.Validation.Form.SameValue fieldAName={"text1"} fieldBName={"text2"} />
                <FS.Field>
                    <FS.Input.Text name={"text1"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"text2"} />
                </FS.Field>
            </FS.Group>
            <FS.Group>
                <FS.Validation.Form.SameValue fieldAName={"text3"} fieldBName={"number"} />
                <FS.Field>
                    <FS.Input.Text name={"text3"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"number"} type={"number"} />
                </FS.Field>
            </FS.Group>
            <FS.Group>
                <FS.Validation.Form.SameValue fieldAName={"text4"} fieldBName={"radio"} />
                <FS.Field>
                    <FS.Input.Text name={"text4"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.RadioGroup
                        name={"radio"}
                        options={[
                            { value: "1", label: "Option with value \"1\"" },
                            { value: "2", label: "Option with value \"2\"" }
                        ]}
                    />
                </FS.Field>
            </FS.Group>
            <FS.Group>
                <FS.Validation.Form.SameValue fieldAName={"text5"} fieldBName={"select"} />
                <FS.Field>
                    <FS.Input.Text name={"text5"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Select
                        name={"select"}
                        options={[
                            { text: "Option 1", value: "1" },
                            { text: "Option 2", value: "2" }
                        ]}
                    />
                </FS.Field>
            </FS.Group>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const SameValue = SameValueTemplate.bind({})
SameValue.args = {}

export default {
    title: 'Developments/Components/FormSystem/Validation/Form',
    component: FS.Validation.Form.SameValue,
    argTypes: { },
} as Meta<typeof FS.Validation.Form.SameValue>
