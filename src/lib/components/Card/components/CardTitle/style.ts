import styled from 'styled-components'

const Title = styled.p`
    margin: 8px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brand};
`

export {
    Title
}