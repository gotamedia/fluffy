import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { InputProps } from "@components/Input"

const inputSelector = "[data-cy=input]"
const fieldSelector = "[data-cy=field]"
const submitSelector = "[data-cy=submit]"

describe("DatePicker", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.DatePicker name={"input"} />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should change the formData", () => {
            const currentYear = new Date().getFullYear()
            const currentMonth = new Date().getMonth() + 1 // starts counting at 0
            const checkDate = new Date(`${currentYear}-${currentMonth}-15`)
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === checkDate.toISOString())
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
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps} data-cy={"datepicker"}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--015").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
        })

        it("Should change the formData with range", () => {
            const currentYear = new Date().getFullYear()
            const currentMonth = new Date().getMonth() + 1 // starts counting at 0
            const checkDateFrom = new Date(`${currentYear}-${currentMonth}-15`)
            const checkDateTo = new Date(`${currentYear}-${currentMonth}-17`)
            const checkDate = [checkDateFrom.toISOString(), checkDateTo.toISOString()].join("~")
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (onSubmitSpy.callCount === 1 && formData.input.value === checkDate)
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
                        <FS.Input.DatePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps} data-cy={"datepicker"}
                            selectsRange
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--015").click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__day--017").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
        })
    })
})
