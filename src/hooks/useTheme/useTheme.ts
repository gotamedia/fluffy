import { useContext } from "react"

import { ThemeContext } from "@root/contexts/ThemeContext"

const useTheme = () => useContext(ThemeContext)

export default useTheme