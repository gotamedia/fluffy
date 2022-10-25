import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import IconButton from './index'
import { Icons } from '../Icon'

describe('<IconButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <IconButton
                    icon={Icons.RocketLaunch}
                />
            )
        )
    })
})
