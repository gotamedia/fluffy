import React from 'react'
import Image from './Image'
import { render } from '@testing-library/react'

describe('<Image />', () => {
    it('should not crash', () => {
        render(<Image />)
    })
})