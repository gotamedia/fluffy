import styled from 'styled-components'

import Button from '@components/Button'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(255, 85, 85);
`

const ErrorInfo = styled.pre`
    display: block;
    white-space: pre-wrap;
    text-align: left;
    font-size: 20px;
    color: rgb(248, 248, 242);
    font-family: "Source Code Pro", monospace;
    margin: auto auto 20px auto;
`

const RefreshButton = styled(Button)`
    margin: 10px auto auto auto;
`

export {
    Wrapper,
    ErrorInfo,
    RefreshButton
}