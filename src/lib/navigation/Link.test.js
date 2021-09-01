import Link from './Link'
import { render, screen } from '@testing-library/react'

describe('<Link />', () => {
    it('should not crash', () => {
        render(<Link />)
    })
})