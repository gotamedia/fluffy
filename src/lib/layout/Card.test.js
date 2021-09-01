import Card, { CardTitle } from './Card'
import { render } from '@testing-library/react'

describe('<Card />', () => {
    it('should not crash', () => {
        render(<Card>Card</Card>)
    })
})

describe('<CardTitle />', () => {
    it('should not crash', () => {
        render((
            <CardTitle>cardTitle</CardTitle>
        ))
    })
})