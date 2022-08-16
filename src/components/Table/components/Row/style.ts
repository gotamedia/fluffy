import styled from "styled-components"

const Row = styled.tr<{ hover?: boolean }>`
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
    ${({ hover, theme }) =>
        hover && `&:hover { background-color: ${theme.colors.grey[5]}; cursor: pointer; }`}
`
export { Row }
