import Card, { CardTitle } from './Card'
import { render } from '@testing-library/react'

describe('<Card />', () => {
    it('renders without crashing', () => {
        render(<Card>Card</Card>)
    })
})

describe('<CardTitle />', () => {
    it('renders without crashing', () => {
        render((
            <CardTitle>cardTitle</CardTitle>
        ))
    })
})