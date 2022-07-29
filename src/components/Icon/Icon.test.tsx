import React from 'react'
import { render } from '@testing-library/react'

import Icon, { Icons } from './index'

describe('<Icon />', () => {
    it('should not crash', () => {
        render(
            <Icon icon={Icons.Info}/>
        )
    })
})
