import { Component } from 'react'

import * as Styled from './style'
import type { ReactNode } from 'react'

class ErrorBoundary extends Component<{ children: ReactNode }> {
    state: {
        hasError: boolean,
        error: any
    }

    constructor(props: any) {
        super(props)

        this.handleRemount = this.handleRemount.bind(this)

        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true,
            error: error
        }
    }

    handleRemount() {
        this.setState({
            hasError: false,
            error: null
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <Styled.Wrapper>
                    <Styled.ErrorInfo>
                        {this.state.error.toString()}
                    </Styled.ErrorInfo>

                    <Styled.RefreshButton onClick={this.handleRemount}>
                        {'Remount'}
                    </Styled.RefreshButton>
                </Styled.Wrapper>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary