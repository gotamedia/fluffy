import Select, { Option } from './Select'
import { render } from '@testing-library/react'

describe('<Select />', () => {
    it('should not crash', () => {
        render(<Select />)
    })
})

describe('<Option />', () => {
    it('should not crash', () => {
        render(<Option />)
    })
})