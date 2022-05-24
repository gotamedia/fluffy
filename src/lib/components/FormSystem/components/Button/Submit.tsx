import * as Contexts from "@components/FormSystem/contexts"
import { useContext } from "react"
import * as Types from "./types"

const SubmitButton: Types.SubmitButtonComponent = () => {
    const formContext = useContext(Contexts.FormContext)

    return (
        <button type={"submit"}>
            {formContext.getButtonLabel("submit")}
        </button>
    )
}

export default SubmitButton
