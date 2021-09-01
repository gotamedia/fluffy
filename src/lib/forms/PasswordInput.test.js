import '@testing-library/jest-dom/extend-expect'
import PasswordInput from './PasswordInput'
import { render, screen, fireEvent } from '@testing-library/react'

describe('<PasswordInput />', () => {
    it('renders without crashing', () => {
        render(<PasswordInput />)
    })

    it('can update input value', () => {
        const value = 'Passw0rd!'

        render(<PasswordInput placeholder="password" />)
        const input = screen.getByPlaceholderText('password')

        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value } })

        expect(input).toHaveValue(value)
    })

    it('can toggle password visibility', () => {
        render((<PasswordInput />))
        const button = screen.getByRole('button')
        const pressed = button.pressed

        expect(button).toHaveAttribute('pressed', pressed)

        fireEvent.click(button)

        expect(button).toHaveAttribute('pressed', pressed === 'true' ? 'false' : 'true')
    })
})