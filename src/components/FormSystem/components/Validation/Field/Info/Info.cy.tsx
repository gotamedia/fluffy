import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("Info", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Text name={"input"}>
                            <FS.Validation.Field.Info i18n={{ text: "Val" }} />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate when shown", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    onSubmitSpy.callCount === 0 &&
                    isValid &&
                    validationMessages.length === 1
                ) {
                    onSubmitSpy()
                }

                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Info condition={true} i18n={{ text: "Val" }} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
        })

        it("Should validate when hidden", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    onSubmitSpy.callCount === 0 &&
                    isValid &&
                    validationMessages.length === 0
                ) {
                    onSubmitSpy()
                }

                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Info condition={false} i18n={{ text: "Val" }} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
