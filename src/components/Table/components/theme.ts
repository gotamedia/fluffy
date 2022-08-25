import { css, CSSObject } from "styled-components"
import * as Types from "./types"

const theme = ({ $theme, theme }: Types.TableThemeStyledProps) => {
    let styles: CSSObject

    switch ($theme) {
        case "primary":
            styles = {
                color: theme.colors.grey[0],
                backgroundColor: theme.colors.white,
            }
            break
        case "secondary":
            styles = {
                color: theme.colors.grey[1],
                backgroundColor: theme.colors.grey[5],
            }
            break
        case "tertiary":
            styles = {
                color: theme.colors.grey[0],
                backgroundColor: theme.colors.grey[5],
            }
            break
        case "quaternary":
            styles = {
                color: "white",
                backgroundColor: theme.colors.grey[0],
            }
            break
        default:
            styles = {}
    }

    return css`
        ${styles}
    `
}

export default theme
