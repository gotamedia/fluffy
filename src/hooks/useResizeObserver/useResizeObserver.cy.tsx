import useResizeObserver from "./useResizeObserver"

describe("useResizeObserver", () => {
    const resizeElementSelector = "[data-cy=resizeElementSelector]"
    const observeElementSelector = "[data-cy=observeElementSelector]"

    it("should return the correct width and height", () => {
        const Component = () => {
            const [ref, dimensions] = useResizeObserver<HTMLDivElement>()

            return (
                <div data-cy={"resizeElementSelector"}>
                    <div
                        ref={ref}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div
                            data-cy={"observeElementSelector"}
                            style={{
                                width: dimensions?.width,
                                height: dimensions?.height,
                            }}
                        />
                    </div>
                </div>
            )
        }

        cy.mount(<Component />)

        // Resizing Element
        cy.get(resizeElementSelector).invoke("css", "width", "200px")
        cy.get(resizeElementSelector).invoke("css", "height", "200px")

        // Check if correct height & width is set by resize observer
        cy.get(observeElementSelector).should("have.css", "height", "200px")
        cy.get(observeElementSelector).should("have.css", "width", "200px")
    })
})
