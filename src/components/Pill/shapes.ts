import { css, CSSObject } from "styled-components"
import * as Types from "./types"

const pillShapes = ({ $shape, $size }: Types.PillStyledProps) => {
    let styles: CSSObject
    const shapeAndSize = $shape + "." + $size

    switch (shapeAndSize) {
        case "round.small":
            styles = {
                height: "18px",
                borderRadius: "16px",
            }
            break
        case "rectangle.small":
            styles = {
                height: "16px",
                borderRadius: "3px",
            }
            break
        default:
            styles = {}
            break
    }

    return css`
        ${styles}
    `
}

export { pillShapes }
