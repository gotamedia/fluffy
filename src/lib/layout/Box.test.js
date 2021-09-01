import Box from './Box'
import { render } from '@testing-library/react'

describe('<Box />', () => {
    it('renders without crashing', () => {
        render(<Box />)
    })
})