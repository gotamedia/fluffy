import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("Password", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Password name={"input"} />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should change the formData", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === 'asdQWE123!"#') ||
                    (onSubmitSpy.callCount === 2 && formData.input.value === "")
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}}
                    onSubmit={onSubmit}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Password name={"input"} data-cy={"input"} />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type('asdQWE123!"#')
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should hide the password", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Password name={"input"} data-cy={"input"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(inputSelector).should("exist").should("have.attr", "type", "password")
        })

        it("Should toggle password visibility", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Password name={"input"} data-cy={"input"} visibilityToggleable />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(inputSelector).should("exist").should("have.attr", "type", "password")
            cy.get(inputSelector).parent().find("svg").click()
            cy.get(inputSelector).should("exist").should("have.attr", "type", "text")
        })
    })
})
