import FS from "../../index"
import { ValidationTypes } from "../../types"

import { theme } from '@utils/theme'

const fieldSelector = "[data-cy=field]"
const otherFieldSelector = "[data-cy=other-field]"
const inputSelector = "[data-cy=input]"
const defaultLabelSelector = "[data-cy=default-label]"
const customLabelSelector = "[data-cy=custom-label]"
const submitSelector = "[data-cy=submit]"

describe("FormSystem.Field", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(
                <FS.Form i18n={{}}>
                    <FS.Field data-cy={"field"}>
                    </FS.Field>
                </FS.Form>
            )
        })

        it("Should render a field container", () => {
            cy.mount(
                <FS.Form i18n={{}}>
                    <FS.Field data-cy={"field"}>
                    </FS.Field>
                </FS.Form>
            )

            cy.get(fieldSelector).should("exist")
        })
    })

    describe("Label", () => {
        it("Should render a field without default label", () => {
            cy.mount(
                <FS.Form i18n={{}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get(defaultLabelSelector).should("not.exist")
        })

        it("Should render a field with default label", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"} defaultLabelProps={{ "data-cy": "default-label" }}>
                        <FS.Input.Text name={"input"} data-cy={"input"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get(defaultLabelSelector).should("exist").and("contain", "Default label")
        })

        it("Should render a field with own label", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"} defaultLabelProps={{ "data-cy": "default-label" }}>
                        <FS.Field.Label data-cy={"custom-label"}>
                            {"Custom label"}
                        </FS.Field.Label>
                        <FS.Input.Text name={"input"} data-cy={"input"} />
                    </FS.Field>
                </FS.Form>
            )

            cy.get(inputSelector).should("exist")
            cy.get(defaultLabelSelector).should("not.exist")
            cy.get(customLabelSelector).should("exist").and("contain", "Custom label")
        })
    })

    describe("Validation Message", () => {
        it("Should render a field with one validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.error.text)
        })

        it("Should render a field with one error validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required type={ValidationTypes.Error} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.error.text)
        })

        it("Should render a field with one warning validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required type={ValidationTypes.Warning} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.warning.text)
        })

        it("Should render a field with one success validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required type={ValidationTypes.Success} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.success.text)
        })

        it("Should render a field with one info validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required type={ValidationTypes.Info} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.hint.text)
        })

        it("Should render a field with one loading validation message", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required type={ValidationTypes.Loading} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).should("exist")
            cy.get(submitSelector).click()
            cy.get(fieldSelector).find("div").should("contain", "Default label krävs.")
            cy.get(fieldSelector).find("div > div > span:last-child")
                .should("contain", "Default label krävs.")
                .and("have.css", "color").and("be.colored", theme.colors.alert.loading.text)
        })

        it("Should render a field with all types of validation messages", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label" }, buttons: { submit: "Submit" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                            <FS.Validation.Field.Required type={ValidationTypes.Error} />
                            <FS.Validation.Field.Required type={ValidationTypes.Warning} />
                            <FS.Validation.Field.Required type={ValidationTypes.Success} />
                            <FS.Validation.Field.Required type={ValidationTypes.Info} />
                            <FS.Validation.Field.Required type={ValidationTypes.Loading} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector)
                .should("exist")
                .and("contain", "Submit")
                .and("be.not.disabled")
                .click()
                .should("be.disabled")

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(1)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.hint.text)

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(2)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.loading.text)

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(3)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.success.text)

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(4)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.warning.text)

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(5)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.error.text)

            cy.get(fieldSelector)
                .find("div > div:nth-of-type(6)")
                .should("contain", "Default label krävs.")
                .and("have.css", "color")
                .and("be.colored", theme.colors.alert.error.text)
        })

        it("Should validate on blur", () => {
            cy.mount(
                <FS.Form i18n={{ fields: { input: "Default label", otherInput: "Other default label" }}}>
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field data-cy={"other-field"}>
                        <FS.Input.Text name={"otherInput"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(fieldSelector).find("div > div").should("not.exist")
            cy.get(otherFieldSelector).find("div > div").should("not.exist")
            cy.get(inputSelector).focus().blur()
            cy.get(fieldSelector).find("div > div:nth-of-type(1)").should("exist")
            cy.get(fieldSelector).find("div > div:nth-of-type(2)").should("not.exist")
            cy.get(otherFieldSelector).find("div > div").should("not.exist")

            cy.get(submitSelector).click()

            cy.get(fieldSelector).find("div > div:nth-of-type(1)").should("exist")
            cy.get(fieldSelector).find("div > div:nth-of-type(2)").should("not.exist")
            cy.get(otherFieldSelector).find("div > div:nth-of-type(1)").should("exist")
            cy.get(otherFieldSelector).find("div > div:nth-of-type(2)").should("not.exist")
        })

        it("Should overwrite the default i18n labels of validation messages", () => {
            cy.mount(
                <FS.Form
                    i18n={{
                        buttons: { submit: "Submit" },
                        fields: { input: "Default label" },
                        validations: {
                            field: {
                                required: {
                                    text: "Overwritten required"
                                }
                            }
                        }
                    }}
                    onSubmit={(formData, isValid, validationMessages, endSubmissionState) => {
                        endSubmissionState()
                    }}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required i18n={{ text: "default" }} />
                            <FS.Validation.Field.Required i18n={{ text: "error" }} type={ValidationTypes.Error} />
                            <FS.Validation.Field.Required i18n={{ text: "warning" }} type={ValidationTypes.Warning} />
                            <FS.Validation.Field.Required i18n={{ text: "success" }} type={ValidationTypes.Success} />
                            <FS.Validation.Field.Required i18n={{ text: "info" }} type={ValidationTypes.Info} />
                            <FS.Validation.Field.Required i18n={{ text: "loading" }} type={ValidationTypes.Loading} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).click()

            cy.get(fieldSelector).find("div > div:nth-of-type(1)").and("contain", "info")
            cy.get(fieldSelector).find("div > div:nth-of-type(2)").and("contain", "loading")
            cy.get(fieldSelector).find("div > div:nth-of-type(3)").and("contain", "success")
            cy.get(fieldSelector).find("div > div:nth-of-type(4)").and("contain", "warning")
            cy.get(fieldSelector).find("div > div:nth-of-type(5)").and("contain", "error")
            cy.get(fieldSelector).find("div > div:nth-of-type(6)").and("contain", "default")
        })

        it("Should remove all validation messages but type info on change", () => {
            cy.mount(
                <FS.Form
                    i18n={{ fields: { input: "Default label" }, buttons: { submit: "Submit" }}}
                    onSubmit={(formData, isValid, validationMessages, endSubmissionState) => {
                        endSubmissionState()
                    }}
                >
                    <FS.Field data-cy={"field"}>
                        <FS.Input.Text name={"input"} data-cy={"input"}>
                            <FS.Validation.Field.Required i18n={{ text: "default" }} />
                            <FS.Validation.Field.Required i18n={{ text: "error" }} type={ValidationTypes.Error} />
                            <FS.Validation.Field.Required i18n={{ text: "warning" }} type={ValidationTypes.Warning} />
                            <FS.Validation.Field.Required i18n={{ text: "success" }} type={ValidationTypes.Success} />
                            <FS.Validation.Field.Required i18n={{ text: "info" }} type={ValidationTypes.Info} />
                            <FS.Validation.Field.Required i18n={{ text: "loading" }} type={ValidationTypes.Loading} />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Button.Submit data-cy={"submit"} />
                </FS.Form>
            )

            cy.get(submitSelector).click()

            cy.get(fieldSelector).find("div > div:nth-of-type(1)").should("exist").and("contain", "info")
            cy.get(fieldSelector).find("div > div:nth-of-type(2)").should("exist").and("contain", "loading")
            cy.get(fieldSelector).find("div > div:nth-of-type(3)").should("exist").and("contain", "success")
            cy.get(fieldSelector).find("div > div:nth-of-type(4)").should("exist").and("contain", "warning")
            cy.get(fieldSelector).find("div > div:nth-of-type(5)").should("exist").and("contain", "error")
            cy.get(fieldSelector).find("div > div:nth-of-type(6)").should("exist").and("contain", "default")

            cy.get(inputSelector).focus().type("A").clear()

            cy.get(fieldSelector).find("div > div:nth-of-type(1)").should("exist").and("contain", "info")
            cy.get(fieldSelector).find("div > div:nth-of-type(2)").should("not.exist")
        })
    })
})
