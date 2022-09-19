import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const fieldSelector = "[data-cy=field]"
const labelSelector = "[data-cy=label]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("Required", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Text name={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                console.log("onSubmit", onSubmitSpy.callCount, isValid)
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type('asdQWE123!"#').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear().blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should render asterisk", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field defaultLabelProps={{ "data-cy": "label" } as { [key: string]: string }}>
                        <FS.Input.Text name={"input"} >
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(labelSelector).find("> sup").should("exist")
        })

        it("Should render no asterisk without required", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field defaultLabelProps={{ "data-cy": "label" } as { [key: string]: string }}>
                        <FS.Input.Text name={"input"} />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(labelSelector).find("> sup").should("not.exist")
        })

        it("Should trigger on change set by validation", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required validateOnChange />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type('asdQWE123!"#')
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
        })

        it("Should trigger on change set by field", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"} validateOnChange>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type('asdQWE123!"#')
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
        })
    })
})
