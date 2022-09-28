import FS from "@components/FormSystem"
import * as Types from "@components/FormSystem/types"
import { FormContext, FormData } from "@components/FormSystem/types"

const field1Selector = "[data-cy=field1]"
const field2Selector = "[data-cy=field2]"
const input1Selector = "[data-cy=input1]"
const input2Selector = "[data-cy=input2]"
const submitSelector = "[data-cy=submit]"

const validationFunction = (formData: FormData) => {
    if (
        String(formData.input1.value).length === 0 ||
        String(formData.input2.value).length === 0 ||
        String(formData.input1.value).length > String(formData.input2.value).length
    ) {
        return []
    }

    return [
        {
            fieldName: "input1",
            involvedFieldNames: ["input1", "input2"],
            text: "Val",
            type: Types.ValidationTypes.Error
        },
        {
            fieldName: "input2",
            involvedFieldNames: ["input1", "input2"],
            text: "Val",
            type: Types.ValidationTypes.Error
        }
    ]
}

describe("Custom", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input1: "Input1", input2: "Input2" }}}>
                    <FS.Validation.Form.Custom
                        involvedFieldNames={["input1", "input2"]}
                        validationFunction={validationFunction}
                    />
                    <FS.Field>
                        <FS.Input.Text name={"input1"} />
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"input2"} />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.Custom
                        involvedFieldNames={["input1", "input2"]}
                        validationFunction={validationFunction}
                    />
                    <FS.Field>
                        <FS.Input.Text name={"input1"} data-cy={"input1"} />
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"input2"} data-cy={"input2"} />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(input1Selector).focus().type("f").blur()
            cy.get(input2Selector).focus().type("f").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(input1Selector).focus().type("oo").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should trigger on change", () => {
            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                >
                    <FS.Validation.Form.Custom
                        involvedFieldNames={["input1", "input2"]}
                        validationFunction={validationFunction}
                        validateOnChange
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.Text name={"input1"} data-cy={"input1"} />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.Text name={"input2"} data-cy={"input2"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input2Selector).focus().type("f")
            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input1Selector).focus().type("f")
            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(input1Selector).focus().type("oo")
            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input1Selector).focus().clear()
            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input2Selector).focus().clear()
            cy.get(field1Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
