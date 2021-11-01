import { Tabs } from './Tabs'
import { render } from '@testing-library/react'

describe('<Tabs />', () => {
    it('should not crash', () => {
        render(<Tabs />)
    })
})