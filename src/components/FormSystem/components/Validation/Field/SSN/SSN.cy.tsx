import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { addDays, format, subDays, subYears } from "date-fns"

const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

const ssnFormat = "yyyyMMdd"

describe("SSN", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.Text name={"input"}>
                            <FS.Validation.Field.SSN />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate with dash", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
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
                            <FS.Validation.Field.SSN />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(inputSelector).focus().type("20001231").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(inputSelector).focus().type("1234").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(inputSelector).focus().clear().type("20001231-1234").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
        })

        it("Should validate without dash", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === "200012311234")
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.SSN skipDash />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).focus().type("20001231").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).focus().type("-1234").blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate with min age", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')
            const checkDate = subYears(new Date(), 18)
            const dayBeforeString = format(subDays(checkDate, 1), ssnFormat)
            const dayAfterString = format(addDays(checkDate, 1), ssnFormat)
            const dayAtString = format(checkDate, ssnFormat)

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.SSN minAge={18} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(inputSelector).focus().type(`${dayAfterString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(inputSelector).focus().clear().type(`${dayAtString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(inputSelector).focus().clear().type(`${dayBeforeString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate with max age", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')
            const checkDate = subYears(new Date(), 19)
            const dayBeforeString = format(subDays(checkDate, 1), ssnFormat)
            const dayAfterString = format(addDays(checkDate, 1), ssnFormat)
            const dayAtString = format(checkDate, ssnFormat)

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && !isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.SSN maxAge={18} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(inputSelector).focus().type(`${dayBeforeString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(inputSelector).focus().clear().type(`${dayAtString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(inputSelector).focus().clear().type(`${dayAfterString}-1234`).blur()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(inputSelector).focus().clear()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should trigger on change set by validation", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.SSN validateOnChange />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("20001231-123A")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().clear().type("20001231-1234")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })

        it("Should trigger on change set by field", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field data-cy={"field"} validateOnChange>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.SSN />
                        </FS.Input.Text>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().type("20001231-123A")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("exist")
            cy.get(inputSelector).focus().clear().type("20001231-1234")
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
            cy.get(inputSelector).focus().clear()
            cy.get(fieldSelector).find("div > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
