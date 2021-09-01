import Button, { ButtonGroup } from './Button'
import { render, screen, fireEvent } from '@testing-library/react'

describe('<Button />', () => {
    it('renders without crashing', () => {
        render(<Button>button</Button>)
    })

    it('can be clicked', () => {
        const mockCallBack = jest.fn()

        render(<Button onClick={mockCallBack}>button</Button>)
        const button = screen.getByText('button')
        fireEvent.click(button)
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})

describe('<ButtonGroup', () => {
    it('renders without crashing', () => {
        render((
            <ButtonGroup />
        ))
    })
})