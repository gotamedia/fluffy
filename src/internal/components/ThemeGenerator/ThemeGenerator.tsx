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

const ThemeGenerator = () => {
    const [theme, setTheme] = useState(getTheme())

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

            <Editor onThemeChange={hamdleOnThemeChange} />
        </Styled.Wrapper>
    )
}

export default ThemeGenerator