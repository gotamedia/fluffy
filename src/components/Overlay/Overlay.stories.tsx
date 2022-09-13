import { Story, Meta } from '@storybook/react'

import Overlay from './'
import { Overlay as Component} from './Overlay'

import * as Types from './types'

const Template: Story<Types.OverlayProps> = (props) => {
    return (
        <div>
            <h1>
                {'Overlay is covering me'}
            </h1>
            
            <Overlay {...props}>
                
            </Overlay>
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/Overlay',
    component: Component,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.OverlayComponent>