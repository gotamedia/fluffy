import {
    useState,
    useCallback
} from 'react'

import { getTheme } from '@utils/theme'
import { ThemeProvider } from '@contexts/ThemeContext'

import Viewer from './components/Viewer'
import Editor from './components/Editor'
import ErrorBoundary from './components/ErrorBoundary'

import * as Styled from './style'

const example = `import { createTheme } from '@gotamedia/fluffy/theme'

const theme = createTheme({
    
})

export default theme`

const ThemeGenerator = () => {
    const [code, setCode] = useState(example)
    const [theme, setTheme] = useState(getTheme())

    const hamdleOnCodeChange = useCallback((value: string) => {
        setCode(value)
    }, [])

    const hamdleOnThemeChange = useCallback((value: any) => {
        setTheme(value)
    }, [])

    return (
        <Styled.Wrapper>
            <ErrorBoundary>
                <ThemeProvider theme={theme}>
                    <Viewer />
                </ThemeProvider>
            </ErrorBoundary>

            <Editor
                code={code}
                theme={theme}
                onCodeChange={hamdleOnCodeChange}
                onThemeChange={hamdleOnThemeChange}
            />
        </Styled.Wrapper>
    )
}

export default ThemeGenerator