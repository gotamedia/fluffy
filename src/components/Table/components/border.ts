import { css, CSSObject } from "styled-components"
import * as Types from "./types"

const border = ({ $border, theme }: Types.TableBorderStyledProps) => {
    let styles: CSSObject

    switch ($border) {
        case "bordered":
            styles = {
                border: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "bottom":
            styles = {
                borderBottom: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "right":
            styles = {
                borderRight: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "left":
            styles = {
                borderLeft: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "top":
            styles = {
                borderTop: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "vertical":
            styles = {
                borderRight: `1px solid ${theme.colors.grey[4]}`,
                borderLeft: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "horizontal":
            styles = {
                borderTop: `1px solid ${theme.colors.grey[4]}`,
                borderBottom: `1px solid ${theme.colors.grey[4]}`,
            }
            break
        case "none":
            styles = {
                border: "none",
            }
            break
        default:
            styles = {}
    }

    return css`
        ${styles}
    `
}

export default border
