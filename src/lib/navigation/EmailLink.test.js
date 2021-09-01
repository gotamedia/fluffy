import '@testing-library/jest-dom/extend-expect'
import EmailLink from './EmailLink'
import { render, screen } from '@testing-library/react'

const title = 'link title'
const label = 'link label'
const email = 'email@domain.com'

describe('<EmailLink />', () => {
    it('should not crash', () => {
        render(<EmailLink title={title} />)
        expect(screen.queryByTitle(title)).toBeNull()
    })

    it('should be empty if email is missing', () => {
        render(<EmailLink title={title} />)
        expect(screen.queryByTitle(title)).toBeNull()
    })

    it('should render label text', () => {
        render(<EmailLink title={title} email={email} label={label} />)
        expect(screen.getByTitle(title)).toHaveTextContent(label)
    })

    it('should not be empty if email exists', () => {
        render(<EmailLink email={email} title={title} />)
        expect(screen.queryByTitle(title)).not.toBeNull()
    })

    it('should set href to correct email', () => {
        const view = render(<EmailLink email={email} title={title} />)
        expect(view.getByTitle(title).href).toEqual(`mailto:${email}`)
    })
})