import { createContext } from "react"

import { getTheme } from '@utils/theme'

const ThemeContext = createContext(getTheme())

export default ThemeContext