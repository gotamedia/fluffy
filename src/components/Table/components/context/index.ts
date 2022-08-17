import { Context, createContext, useContext } from "react"
import type { TableElementContext } from "../types"

const TableContext: Context<TableElementContext> = createContext({} as TableElementContext)

const useTableContext = () => {
    const context = useContext(TableContext)
    if (Object.entries(context).length === 0) {
        throw new Error("The component must be used within a <Table> component")
    }
    return context
}

export { TableContext, useTableContext }
