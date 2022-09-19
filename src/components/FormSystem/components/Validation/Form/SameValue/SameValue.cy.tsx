import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const field1Selector = "[data-cy=field1]"
const field2Selector = "[data-cy=field2]"
const input1Selector = "[data-cy=input1]"
const input2Selector = "[data-cy=input2]"
const submitSelector = "[data-cy=submit]"

describe("SameValue", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input1: "Input1", input2: "Input2" }}}>
                    <FS.Validation.Form.SameValue fieldAName={"input1"} fieldBName={"input2"} />
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
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid) ||
                    (onSubmitSpy.callCount === 4 && !isValid) ||
                    (onSubmitSpy.callCount === 5 && isValid)
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
                    <FS.Validation.Form.SameValue fieldAName={"input1"} fieldBName={"input2"} />
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
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input1Selector).focus().type("asd").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input2Selector).focus().type("as").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input2Selector).focus().type("d").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input1Selector).focus().clear().blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
            cy.get(input2Selector).clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 6)
        })

        it("Should trigger on change", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input1: "Input1", input2: "Input2" } }}>
                    <FS.Validation.Form.SameValue fieldAName={"input1"} fieldBName={"input2"} />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.Text name={"input1"} data-cy={"input1"} />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.Text name={"input2"} data-cy={"input2"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(field1Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input1Selector).focus().type("asd").blur()
            cy.get(field1Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("exist")
            cy.get(field2Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("exist")
            cy.get(input2Selector).focus().type("as").blur()
            cy.get(field1Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("exist")
            cy.get(field2Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("exist")
            cy.get(input2Selector).focus().type("d").blur()
            cy.get(field1Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div:nth-of-type(1) > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
