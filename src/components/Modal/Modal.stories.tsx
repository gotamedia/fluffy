import { useState } from 'react'

import { Story, Meta } from '@storybook/react'

import Modal from './'
import { Modal as Component } from './Modal'

import Button from '../Button'

import * as Types from './types'

const Template: Story<Types.ModalProps> = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                {'Open Modal'}
            </Button>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <h1> {'Modal'} </h1>

                        <div>
                            <p> {'Modal content...'} </p>
                            <p> {'Modal content...'} </p>
                            <p> {'Modal content...'} </p>
                            <p> {'Modal content...'} </p>
                            <p> {'Modal content...'} </p>
                        </div>
                    </Modal>
                )
            }
        </div>
    )
}

export const BasicStory = Template.bind({})
BasicStory.args = {
    
}

export default {
    title: 'Developments/Components/Modal',
    component: Component,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.ModalComponent>