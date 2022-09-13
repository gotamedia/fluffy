import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { ButtonHTMLAttributes } from "react"

const inputSelector = "[data-cy=input]"
const menuSelector = "[data-cy=menu]"
const submitSelector = "[data-cy=submit]"

describe("Select", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Select
                            name={"input"}
                            options={[
                                { text: "One", value: "1" },
                                { text: "Two", value: "2" }
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
                        <FS.Input.Select
                            name={"input"}
                            triggerProps={{ "data-cy": "input" } as ButtonHTMLAttributes<HTMLButtonElement>}
                            data-cy={"menu"}
                            options={[
                                { text: "One", value: "1" },
                                { text: "Two", value: "2" }
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
            cy.get(inputSelector).click()
            cy.get(menuSelector).find("> div > div > div:nth-of-type(1)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(menuSelector).find("> div > div > div:nth-of-type(2)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should change the formData with multi select", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "1") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === "1~2") ||
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
                        <FS.Input.Select
                            name={"input"}
                            triggerProps={{ "data-cy": "input" } as ButtonHTMLAttributes<HTMLButtonElement>}
                            data-cy={"menu"}
                            isMultiSelect
                            closeOnSelect
                            options={[
                                { text: "One", value: "1" },
                                { text: "Two", value: "2" }
                            ]}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).click()
            cy.get(menuSelector).find("> div > div > div:nth-of-type(1)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(menuSelector).find("> div > div > div:nth-of-type(2)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(menuSelector).find("> div > div > div:nth-of-type(1)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })
    })
})
