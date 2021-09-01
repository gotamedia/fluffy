import React from 'react'
import Image from './Image'
import { render } from '@testing-library/react'

describe('<Image />', () => {
    it('renders without crashing', () => {
        render(<Image />)
    })
})