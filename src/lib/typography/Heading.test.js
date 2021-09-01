import '@testing-library/jest-dom/extend-expect'
import Heading from './Heading'
import { render, screen } from '@testing-library/react'

describe('<Heading />', () => {
    it('should not crash', () => {
        render(<Heading />)
    })

    it('should render given heading', () => {
        const heading = 'heading'
        render(<Heading>{heading}</Heading>)
        expect(screen.getByText(heading)).toBeInTheDocument()
    })
})