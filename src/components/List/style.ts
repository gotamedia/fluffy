import styled from 'styled-components'

import InputComponent from '../Input'

const Wrapper = styled.div`
    outline: none;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`

const Input = styled(InputComponent)`
    min-width: unset;
    margin-bottom: 5px;

    &:focus {
        box-shadow: unset;
    }
`

export {
    Wrapper,
    Input
}