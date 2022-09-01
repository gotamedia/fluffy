import * as Contexts from "@components/FormSystem/contexts"
import { useContext } from "react"

const useFormContext = () => {
    return useContext(Contexts.FormContext)
}

export default useFormContext
