import '@testing-library/jest-dom/extend-expect'
import EmailLink from './EmailLink'
import Link from './Link'
import { render } from '@testing-library/react'

describe('<EmailLink />', () => {
    it('should be empty if email is missing', () => {
        render(<EmailLink />)
    })

    it('should not be empty if email exists', () => {
        const view = render(<EmailLink email="email@domain.com" />)
        expect(view).not.toBeNull()
    })

    it('should set href to correct email', () => {
        const title = 'link title'
        const view = render(<EmailLink email="email@domain.com" title={title} />)
        expect(view.getByTitle(title).href).toEqual('mailto:email@domain.com')
    })
})