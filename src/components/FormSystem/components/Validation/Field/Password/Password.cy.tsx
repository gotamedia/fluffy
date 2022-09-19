import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"

const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

describe("Password", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Text name={"input"}>
                            <FS.Validation.Field.Password />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate lowercase", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password lowerCase />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type('ASD123!"#').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("asd").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate uppercase", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password upperCase />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type('asd123!"#').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("ASD").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate special chars", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password specialChars />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type("asdASD123").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type('!"#').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate number", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password number />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type('asdASD!"#').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("123").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate all together", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && !isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password lowerCase upperCase number specialChars />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type('aA').blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("1!").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate blacklist", () => {
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
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password blacklist={"asd"} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).focus().type("ASD").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("asd").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should trigger on change set by validation", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password upperCase validateOnChange />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("asd")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().type("ASD")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })

        it("Should trigger on change set by field", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"} validateOnChange>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Password upperCase />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("asd")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().type("ASD")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
