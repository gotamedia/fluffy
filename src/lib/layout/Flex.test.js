import Flex from './Flex'
import { render } from '@testing-library/react'

describe('<Flex />', () => {
    it('should not crash', () => {
        render(<Flex />)
    })
})