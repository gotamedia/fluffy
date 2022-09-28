import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("Value", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Text name={"input"}>
                            <FS.Validation.Field.Value value={"foo"} />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate value", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Value value={"foo"} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.callCount", 0)
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(inputSelector).focus().type("fo").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(inputSelector).focus().type("o").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(inputSelector).focus().clear().blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
        })

        it("Should validate inverted value", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Value value={"foo"} invertedValue />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.callCount", 0)
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(inputSelector).focus().type("fo").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(inputSelector).focus().type("o").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(inputSelector).focus().clear().blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
        })

        it("Should trigger on change set by validation", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Value validateOnChange value={"foo"} />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("fo")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().type("o")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })

        it("Should trigger on change set by field", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"} validateOnChange>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Value value={"foo"} />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("fo")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().type("o")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
