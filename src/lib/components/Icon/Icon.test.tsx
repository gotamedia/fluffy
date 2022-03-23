import Icon, { Icons } from './index'
import { render } from '@testing-library/react'

describe('<Icon />', () => {
    it('should not crash', () => {
        render(
            <Icon icon={Icons.Info}/>
        )
    })
})
