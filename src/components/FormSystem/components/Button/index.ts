import CancelButtonComponent from "./Cancel"
import DeleteButtonComponent from "./Delete"
import SubmitButtonComponent from "./Submit"
import type { ComponentType } from "./types"

const Button = SubmitButtonComponent as ComponentType

Button.Cancel = CancelButtonComponent as ComponentType
Button.Cancel.displayName = "Button.Cancel"
Button.Delete = DeleteButtonComponent as ComponentType
Button.Delete.displayName = "Button.Delete"
Button.Submit = SubmitButtonComponent as ComponentType
Button.Submit.displayName = "Button.Submit"

export default Button
