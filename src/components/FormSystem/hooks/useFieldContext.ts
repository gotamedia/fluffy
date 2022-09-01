import * as Contexts from "@components/FormSystem/contexts"
import { useContext } from "react"

const useFieldContext = () => {
    return useContext(Contexts.FieldContext)
}

export default useFieldContext
