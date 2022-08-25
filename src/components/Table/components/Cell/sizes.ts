import { css } from "styled-components"
import * as Types from "./types"

const cellSizesStyleFn = ({ $size }: Types.TableCellStyledProps) => {
    let styles
    switch ($size) {
        case "small":
            styles = `
                padding: 5px 12px;
            `
            break
        case "medium":
            styles = `
            padding: 8px 12px;
        `
            break
        default:
            styles = ``
            break
    }

    return css`
        ${styles}
    `
}

export { cellSizesStyleFn }
