import { useState } from "react"
import useMeasure from "./useMeasure"

describe("useMeasure", () => {
    const resizeElement = "resizeElement"
    const observeElement = "observeElement"
    const cyResizeElementSelector = "[data-cy=" + resizeElement + "]"
    const cyObserveElementSelector = "[data-cy=" + observeElement + "]"

    it("should return the correct width and height", () => {
        const Component = () => {
            const [ref, setRef] = useState<HTMLElement | null>(null)
            const { rect: dimensions } = useMeasure(ref)

            return (
                <div data-cy={resizeElement}>
                    <div
                        ref={(element) => setRef(element)}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div
                            data-cy={observeElement}
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
        cy.get(cyResizeElementSelector).invoke("css", "width", "200px")
        cy.get(cyResizeElementSelector).invoke("css", "height", "200px")

        // Check if correct height & width is set by resize observer
        cy.get(cyObserveElementSelector).should("have.css", "height", "200px")
        cy.get(cyObserveElementSelector).should("have.css", "width", "200px")
    })
})
