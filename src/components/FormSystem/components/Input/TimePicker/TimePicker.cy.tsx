import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { InputProps } from "@components/Input"

const inputSelector = "[data-cy=input]"
const fieldSelector = "[data-cy=field]"
const submitSelector = "[data-cy=submit]"

describe("TimePicker", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Input" }}}>
                    <FS.Field>
                        <FS.Input.TimePicker name={"input"} />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should change the formData", () => {
            const checkDate = new Date()
            checkDate.setHours(13, 0, 0, 0)

            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && formData.input.value === "") ||
                    (
                        onSubmitSpy.callCount === 1 &&
                        // needs to cut off the ms of the time since react-datepicker will create a little fuzz
                        String(formData.input.value).substring(0, 19) === checkDate.toISOString().substring(0, 19)
                    )
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
                        <FS.Input.TimePicker
                            name={"input"}
                            inputProps={{ "data-cy": "input" } as InputProps} data-cy={"datepicker"}
                            timeIntervals={60}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledOnce")
            cy.get(inputSelector).click()
            cy.get(fieldSelector).find(".react-datepicker .react-datepicker__time-list-item:nth-of-type(14)").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.been.calledTwice")
        })
    })
})
