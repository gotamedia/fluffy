import { render } from '@testing-library/react'

import WithThemeProvider from '../../internal/hocs/WithThemeProvider'

import Icon, { Icons } from './index'

describe('<Icon />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <Icon icon={Icons.InformationCircle}/>
            )
        )
    })
})
