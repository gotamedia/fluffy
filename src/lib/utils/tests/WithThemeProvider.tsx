import { ThemeProvider } from 'styled-components'

import { getTheme } from '../theme'

const WithThemeProvider = (component: any) => {
    return (
        <ThemeProvider theme={getTheme()}>
            {component}
        </ThemeProvider>
    )
}

export default WithThemeProvider