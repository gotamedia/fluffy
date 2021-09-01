import { Quote, QuoteText, QuoteByline } from './Quote'
import { render } from '@testing-library/react'

describe('<Quote />', () => {
    it('should not crash', () => {
        render(<Quote>quote</Quote>)
    })

    it('renders <QuoteText /> without crashing', () => {
        render((
            <Quote>
                <QuoteText>quote text</QuoteText>
            </Quote>
        ))
    })

    it('renders <QuoteByline /> without crashing', () => {
        render((
            <Quote>
                <QuoteByline>quote byline</QuoteByline>
            </Quote>
        ))
    })
})