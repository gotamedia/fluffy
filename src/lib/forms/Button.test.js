import React from 'react'
import ReactDOM from 'react-dom'
import Button, { ButtonGroup } from './Button'

it('Button renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button>button</Button>, div)
})

it('ButtonGroup renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
        <ButtonGroup>
            <Button>button 1</Button>
            <Button>button 2</Button>
        </ButtonGroup>
    ), div)
})