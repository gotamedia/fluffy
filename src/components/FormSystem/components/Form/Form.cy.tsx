import { FormContext, ValidationTypes } from "@components/FormSystem/types"
import FS from '../../index'

const labelSelector = "[data-cy=label]"
const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const otherInputSelector = "[data-cy=other-input]"
const cancelSelector = "[data-cy=cancel]"
const deleteSelector = "[data-cy=delete]"
const submitSelector = "[data-cy=submit]"

describe("FormSystem.Form", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{}}></FS.Form>
            )
        })

        it("Should render i18n labels", () => {
            cy.mount(
                <FS.Form
                    i18n={{
                        buttons: {
                            cancel: "Button cancel",
                            delete: "Button delete",
                            submit: "Button submit"
                        },
                        fields: {
                            input: "Field input",
                            otherInput: "Field otherInput",
                        },
                        validations: {
                            field: {
                                required: { text: "Validation field required" }
                            },
                            form: {
                                sameValue: {
                                    textA: "Validation form sameValue A",
                                    textB: "Validation form sameValue B"
                                }
                            }
                        }
                    }}
                >
                    <FS.Validation.Form.SameValue fieldAName={"input"} fieldBName={"otherInput"} />
                    <FS.Field data-cy={"field"} defaultLabelProps={{ "data-cy": "label" }}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"otherInput"} data-cy={"other-input"} />
                    </FS.Field>
                    <FS.Button.Cancel data-cy={"cancel"} />
                    <FS.Button.Delete data-cy={"delete"} />
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).focus().blur()
            cy.get(otherInputSelector).type("A").blur()

            cy.get(cancelSelector).should("contain", "Button cancel")
            cy.get(deleteSelector).should("contain", "Button delete")
            cy.get(submitSelector).should("contain", "Button submit")
            cy.get(labelSelector).should("contain", "Field input")
            cy.get(fieldSelector)
                .find("div > div:nth-of-type(1)")
                .should("contain", "Validation form sameValue A")
            cy.get(fieldSelector)
                .find("div > div:nth-of-type(2)")
                .should("contain", "Validation field required")
        })
    })

    describe("State", () => {
        it("Should switch to disabled and back", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')
            const onSubmitEndedSpy = cy.spy().as('onSubmitEndedSpy')

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label" }, buttons: { submit: "Submit" }}}
                    onSubmit={async (formData, isValid, validationMessages, endSubmissionState) => {
                        // the timeout is needed for cypress to have enough time to run the assertions
                        onSubmitSpy()
                        await new Promise(resolve => setTimeout(resolve, 100))
                        endSubmissionState()
                        onSubmitEndedSpy()
                    }}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist").and("be.not.disabled")
            cy.get(submitSelector).should("exist").and("be.not.disabled").click().should("be.disabled")
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).should("be.disabled")
            cy.get(submitSelector).should("be.disabled")
            cy.get("@onSubmitEndedSpy").should("not.have.been.called")
            cy.get("@onSubmitEndedSpy").should("have.been.calledOnce")
            cy.get(submitSelector).should("not.be.disabled")
        })
    })

    describe("Callback", () => {
        it("Should call on change", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}} onChange={onChangeSpy}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get(inputSelector).type("Value")
            cy.get("@onChangeSpy").should("have.been.called")
        })

        it("Should call on cancel", () => {
            const onCancelSpy = cy.spy().as('onCancelSpy')

            cy.mount(
                <FS.Form i18n={{ buttons: { cancel: "Cancel" }}} onCancel={onCancelSpy}>
                    <FS.Button.Cancel data-cy={"cancel"} />
                </FS.Form>
            )

            cy.get(cancelSelector).should("exist")
            cy.get("@onCancelSpy").should("not.have.been.called")
            cy.get(cancelSelector).click()
            cy.get("@onCancelSpy").should("have.been.calledOnce")
        })

        it("Should call on delete", () => {
            const onDeleteSpy = cy.spy().as('onDeleteSpy')

            cy.mount(
                <FS.Form i18n={{ buttons: { delete: "Delete" }}} onDelete={onDeleteSpy}>
                    <FS.Button.Delete data-cy={"delete"} />
                </FS.Form>
            )

            cy.get(deleteSelector).should("exist")
            cy.get("@onDeleteSpy").should("not.have.been.called")
            cy.get(deleteSelector).click()
            cy.get("@onDeleteSpy").should("have.been.calledOnce")
        })

        it("Should call on submit", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            cy.mount(
                <FS.Form i18n={{ buttons: { submit: "Submit" }}} onSubmit={onSubmitSpy}>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get("@onSubmitSpy").should("not.have.been.called")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
        })

        it("Should have the correct args on cancel", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')

            const onCancel: FormContext.Events.onCancel = async (formData, endCancellationState) => {
                const expectedFormData = {
                    input: {
                        name: "input",
                        validationMessages: [],
                        value: "A",
                        additionalInputProps: {},
                        requiresValidation: false
                    }
                }

                if (JSON.stringify(formData) === JSON.stringify(expectedFormData)) {
                    onChangeSpy()
                }

                await new Promise(resolve => setTimeout(resolve, 100))

                endCancellationState()
            }

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label"}, buttons: { cancel: "Cancel" }}}
                    onCancel={onCancel}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Cancel data-cy={"cancel"} />
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get(inputSelector).type("A")
            cy.get(cancelSelector).click().should("be.disabled")
            cy.get("@onChangeSpy").should("have.been.calledOnce")
            cy.get(cancelSelector).click().should("not.be.disabled")
        })

        it("Should have the correct args on change", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')

            const onChange: FormContext.Events.onChange = (fieldName, value, valid, isManualChange, formData, setFieldValue) => {
                if (isManualChange) {
                    const expectedFormData = {
                        input: {
                            name: "input",
                            validationMessages: [],
                            value: "BC",
                            additionalInputProps: {},
                            requiresValidation: true
                        }
                    }

                    if (
                        fieldName === "input" &&
                        value === "BC" &&
                        valid &&
                        JSON.stringify(formData) === JSON.stringify(expectedFormData)
                    ) {
                        onChangeSpy()
                    }
                } else {
                    const expectedFormData = {
                        input: {
                            name: "input",
                            validationMessages: [],
                            value: "A",
                            additionalInputProps: {},
                            requiresValidation: false
                        }
                    }

                    if (
                        fieldName === "input" &&
                        value === "A" &&
                        valid &&
                        JSON.stringify(formData) === JSON.stringify(expectedFormData)
                    ) {
                        onChangeSpy()
                    }

                    setFieldValue("input", "BC", true)
                }
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}} onChange={onChange}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get(inputSelector).type("A")
            cy.get("@onChangeSpy").should("have.been.calledTwice")
        })

        it("Should have the correct args on delete", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')

            const onDelete: FormContext.Events.onDelete = async (formData, endDeletionState) => {
                const expectedFormData = {
                    input: {
                        name: "input",
                        validationMessages: [],
                        value: "A",
                        additionalInputProps: {},
                        requiresValidation: false
                    }
                }

                if (JSON.stringify(formData) === JSON.stringify(expectedFormData)) {
                    onChangeSpy()
                }

                await new Promise(resolve => setTimeout(resolve, 100))

                endDeletionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label"}, buttons: { delete: "Delete" }}}
                    onDelete={onDelete}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Delete data-cy={"delete"} />
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get(inputSelector).type("A")
            cy.get(deleteSelector).click().should("be.disabled")
            cy.get("@onChangeSpy").should("have.been.calledOnce")
            cy.get(deleteSelector).click().should("not.be.disabled")
        })

        it("Should have the correct args on submit when valid", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')

            const onSubmit: FormContext.Events.onSubmit = async (
                formData,
                isValid,
                validationMessages,
                endSubmissionState
            ) => {
                const expectedFormData = {
                    input: {
                        name: "input",
                        validationMessages: [],
                        value: "A",
                        additionalInputProps: {},
                        requiresValidation: false
                    }
                }

                if (
                    JSON.stringify(formData) === JSON.stringify(expectedFormData) &&
                    isValid &&
                    validationMessages.length === 0
                ) {
                    onChangeSpy()
                }

                await new Promise(resolve => setTimeout(resolve, 100))

                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label"}, buttons: { submit: "Submit" }}}
                    onSubmit={onSubmit}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get(inputSelector).type("A")
            cy.get(submitSelector).click().should("be.disabled")
            cy.get("@onChangeSpy").should("have.been.calledOnce")
            cy.get(submitSelector).click().should("not.be.disabled")
        })

        it("Should have the correct args on submit when invalid", () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onChange: FormContext.Events.onChange = async () => {
                onChangeSpy()
            }

            const onSubmit: FormContext.Events.onSubmit = async (
                formData,
                isValid,
                validationMessages,
                endSubmissionState
            ) => {
                if (
                    formData.input &&
                    formData.input.name === "input" &&
                    formData.input.value === "A" &&
                    !formData.input.requiresValidation &&
                    !isValid &&
                    validationMessages.length === 1 &&
                    validationMessages[0].fieldName === "input" &&
                    validationMessages[0].text === "Kontrollera e-postadressens format." &&
                    validationMessages[0].type === ValidationTypes.Error &&
                    validationMessages[0].validationId.startsWith("input_email_")
                ) {
                    onSubmitSpy()
                }

                await new Promise(resolve => setTimeout(resolve, 100))

                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label"}, buttons: { submit: "Submit" }}}
                    onChange={onChange}
                    onSubmit={onSubmit}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Email />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get("@onChangeSpy").should("not.have.been.called")
            cy.get("@onSubmitSpy").should("not.have.been.called")
            cy.get(inputSelector).type("A")
            cy.get("@onChangeSpy").should("have.been.calledOnce")
            cy.get(inputSelector).blur()
            cy.get(fieldSelector).find("div > div").should("exist")
            cy.get(submitSelector).should("not.be.disabled").click().should("be.disabled")
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(submitSelector).should("not.be.disabled")
        })
    })
})
