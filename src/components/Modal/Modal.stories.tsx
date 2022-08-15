import React, {
    useState
} from 'react'

import { Story, Meta } from '@storybook/react'

import Button from '../Button'
import Modal from './index'

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

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/Modal',
    component: Modal,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.ModalComponent>