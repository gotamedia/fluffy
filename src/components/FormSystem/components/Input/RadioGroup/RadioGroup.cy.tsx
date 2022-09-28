import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("RadioGroup", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.RadioGroup
                            name={"input"}
                            options={[
                                { label: "One", value: "1" },
                                { label: "Two", value: "2" }
                            ]}
                        />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should change the formData", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === "1") ||
                    (onSubmitSpy.callCount === 2 && formData.input.value === "2")
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
                    <FS.Field>
                        <FS.Input.RadioGroup
                            name={"input"}
                            data-cy={"input"}
                            options={[
                                { label: "One", value: "1" },
                                { label: "Two", value: "2" }
                            ]}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).find("label:nth-of-type(1) input").check().should("be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).find("label:nth-of-type(2) input").check().should("be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
            cy.get(inputSelector).find("label:nth-of-type(2) input").check().should("be.checked")
        })

        it("Should not allow to deselect", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === "1") ||
                    (onSubmitSpy.callCount === 2 && formData.input.value === "1")
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
                    <FS.Field>
                        <FS.Input.RadioGroup
                            name={"input"}
                            data-cy={"input"}
                            options={[
                                { label: "One", value: "1" },
                                { label: "Two", value: "2" }
                            ]}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).find("label:nth-of-type(1) input").click().should("be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).find("label:nth-of-type(1) input").click().should("be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should allow to deselect", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === "1") ||
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
                    <FS.Field>
                        <FS.Input.RadioGroup
                            name={"input"}
                            data-cy={"input"}
                            options={[
                                { label: "One", value: "1" },
                                { label: "Two", value: "2" }
                            ]}
                            allowDeselect
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).find("label:nth-of-type(1) input").click().should("be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).find("label:nth-of-type(1) input").click().should("not.be.checked")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })
    })
})
