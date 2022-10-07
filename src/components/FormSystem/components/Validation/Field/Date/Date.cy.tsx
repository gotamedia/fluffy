import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { InputProps } from "@components/Input"

const fieldSelector = "[data-cy=field]"
const inputSelector = "[data-cy=input]"
const submitSelector = "[data-cy=submit]"

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1 // starts counting at 0
const date09 = new Date(`${currentYear}-${currentMonth}-09`)
const date10 = new Date(`${currentYear}-${currentMonth}-10`)
const date11 = new Date(`${currentYear}-${currentMonth}-11`)

describe("Date", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.DatePicker name={"input"}>
                            <FS.Validation.Field.Date />
                        </FS.Input.DatePicker>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate with min date", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === date10.toISOString())
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps}
                        >
                            <FS.Validation.Field.Date min={date10} />
                        </FS.Input.DatePicker>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate with min date exclusive", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === date11.toISOString())
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps}
                        >
                            <FS.Validation.Field.Date min={date10} minExclusive />
                        </FS.Input.DatePicker>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate with max date", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === date10.toISOString())
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps}
                        >
                            <FS.Validation.Field.Date max={date10} />
                        </FS.Input.DatePicker>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate with max date exclusive", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === date09.toISOString())
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps}
                        >
                            <FS.Validation.Field.Date max={date10} maxExclusive />
                        </FS.Input.DatePicker>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })

        it("Should validate with min and max date exclusive", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && isValid && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input.value === date10.toISOString())
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }, buttons: { submit: "Submit" }}} onSubmit={onSubmit}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps}
                        >
                            <FS.Validation.Field.Date min={date09} minExclusive max={date11} maxExclusive />
                        </FS.Input.DatePicker>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledThrice")
        })
    })
})
