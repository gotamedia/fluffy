import Label from "@components/FormSystem/components/Field/Label"
import FieldComponent from "./Field"
import { ComponentType } from "./types"

const Field = FieldComponent as ComponentType

Field.Label = Label
Field.Label.displayName = "Field.Label"

export default Field
