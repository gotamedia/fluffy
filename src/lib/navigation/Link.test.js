import Link from './Link'
import { render } from '@testing-library/react'

describe('<Link />', () => {
    it('renders without crashing', () => {
        render(<Link />)
    })
})