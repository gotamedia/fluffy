import '@testing-library/jest-dom/extend-expect'
import Text from './Text'
import { render, screen } from '@testing-library/react'

describe('<Text />', () => {
    it('should not crash', () => {
        render(<Text />)
    })

    it('should render given heading', () => {
        const text = 'text'
        render(<Text>{text}</Text>)
        expect(screen.getByText(text)).toBeInTheDocument()
    })
})