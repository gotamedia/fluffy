import React from 'react'
import ReactDOM from 'react-dom'
import Card, { CardTitle } from './Card'

it('Card renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Card>Card</Card>, div)
})

it('Card with CardTitle renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
        <Card>
            <CardTitle>cardTitle</CardTitle>
        </Card>
    ), div)
})