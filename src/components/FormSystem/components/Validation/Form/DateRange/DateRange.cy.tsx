import FS from "@components/FormSystem"
import { FormContext } from "@components/FormSystem/types"
import { InputProps } from "@components/Input"

const field1Selector = "[data-cy=field1]"
const field2Selector = "[data-cy=field2]"
const field3Selector = "[data-cy=field3]"
const input1Selector = "[data-cy=input1]"
const input2Selector = "[data-cy=input2]"
const input3Selector = "[data-cy=input3]"
const submitSelector = "[data-cy=submit]"

describe("DateRange", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input1: "Input1", input2: "Input2", input3: "Input3" }}}>
                    <FS.Validation.Form.DateRange fieldName={"input1"} />
                    <FS.Field>
                        <FS.Input.DatePicker name={"input1"} />
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.DatePicker name={"input2"} />
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.DatePicker name={"input3"} />
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should validate", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && !isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2", input3: "Input3" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input2"}
                        minFieldName={"input1"}
                        maxFieldName={"input3"}
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field3"}>
                        <FS.Input.DatePicker
                            name={"input3"}
                            data-cy={"input3"}
                            inputProps={{ "data-cy": "input3" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get(input3Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(input3Selector).click()
            cy.get(field3Selector).find(".react-datepicker .react-datepicker__day--012").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--013").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate min", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input2"}
                        minFieldName={"input1"}
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate min exclusive", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && !isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input2"}
                        minFieldName={"input1"}
                        minExclusive
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate max", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input1"}
                        maxFieldName={"input2"}
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate max exclusive", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && !isValid) ||
                    (onSubmitSpy.callCount === 3 && !isValid) ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input1"}
                        maxFieldName={"input2"}
                        maxExclusive
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should validate and block the selection", () => {
            const onSubmitSpy = cy.spy().as('onSubmitSpy')

            const onSubmit: FormContext.Events.onSubmit = (formData, isValid, validationMessages, endSubmissionState) => {
                if (
                    (onSubmitSpy.callCount === 0 && isValid) ||
                    (onSubmitSpy.callCount === 1 && isValid) ||
                    (onSubmitSpy.callCount === 2 && isValid && formData.input2.value === "") ||
                    (onSubmitSpy.callCount === 3 && isValid && formData.input2.value === "") ||
                    (onSubmitSpy.callCount === 4 && isValid)
                ) {
                    onSubmitSpy()
                }
                endSubmissionState()
            }

            cy.mount(
                <FS.Form
                    i18n={{
                        fields: { input1: "Input1", input2: "Input2", input3: "Input3" },
                        buttons: { submit: "Submit" }
                    }}
                    onSubmit={onSubmit}
                >
                    <FS.Validation.Form.DateRange
                        fieldName={"input2"}
                        minFieldName={"input1"}
                        maxFieldName={"input3"}
                        blockSelection
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field3"}>
                        <FS.Input.DatePicker
                            name={"input3"}
                            data-cy={"input3"}
                            inputProps={{ "data-cy": "input3" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(input1Selector).should("exist")
            cy.get(input2Selector).should("exist")
            cy.get(input3Selector).should("exist")
            cy.get("@onSubmitSpy").should("have.not.been.calledOnce")
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 1)
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(input3Selector).click()
            cy.get(field3Selector).find(".react-datepicker .react-datepicker__day--012").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 2)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 3)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--013").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 4)
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(submitSelector).click()
            cy.get("@onSubmitSpy").should("have.callCount", 5)
        })

        it("Should trigger on change", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input1: "Input1", input2: "Input2", input3: "Input3" } }}>
                    <FS.Validation.Form.DateRange
                        fieldName={"input2"}
                        minFieldName={"input1"}
                        maxFieldName={"input3"}
                        validateOnChange
                    />
                    <FS.Field data-cy={"field1"}>
                        <FS.Input.DatePicker
                            name={"input1"}
                            data-cy={"input1"}
                            inputProps={{ "data-cy": "input1" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field2"}>
                        <FS.Input.DatePicker
                            name={"input2"}
                            data-cy={"input2"}
                            inputProps={{ "data-cy": "input2" } as InputProps}
                        />
                    </FS.Field>
                    <FS.Field data-cy={"field3"}>
                        <FS.Input.DatePicker
                            name={"input3"}
                            data-cy={"input3"}
                            inputProps={{ "data-cy": "input3" } as InputProps}
                        />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(field1Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field3Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input1Selector).click()
            cy.get(field1Selector).find(".react-datepicker .react-datepicker__day--010").click()
            cy.get(input3Selector).click()
            cy.get(field3Selector).find(".react-datepicker .react-datepicker__day--012").click()
            cy.get(field1Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field2Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field3Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--009").click()
            cy.get(field2Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("exist")
            cy.get(field1Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field3Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--013").click()
            cy.get(field2Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("exist")
            cy.get(field1Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field3Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(input2Selector).click()
            cy.get(field2Selector).find(".react-datepicker .react-datepicker__day--011").click()
            cy.get(field2Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field1Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
            cy.get(field3Selector).find("div:nth-of-type(2) > div > span:nth-of-type(1)").should("not.exist")
        })
    })
})
