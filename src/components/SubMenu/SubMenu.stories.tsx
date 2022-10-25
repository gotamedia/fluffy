import {
    useState,
    useCallback
} from 'react'

import { Story, Meta } from '@storybook/react'

import SubMenu from './index'
import { SubMenu as Component } from './SubMenu'

import ListItem from '../ListItem'
import Menu from '../Menu'
import IconButton, { IconButtonShapes, IconButtonSizes } from '../IconButton'

import { Icons } from '../Icon'

import * as Types from './types'

const Basic: Story<Types.SubMenuProps> = (props) => {
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null)

    const [showMenu, setShowMenu] = useState(false)

    const toggleShowMenu = useCallback(() => {
        setShowMenu(current => !current)
    }, [])

    return (
        <div>
            <IconButton
                ref={setAnchorRef}
                icon={Icons.Bars3}
                shape={IconButtonShapes.Circle}
                size={IconButtonSizes.Small}
                onClick={toggleShowMenu}
            />

            <Menu
                {...props}
                offset={{
                    x: 16,
                    y: -16
                }}
                show={showMenu}
                anchor={anchorRef}
                onClickOutside={toggleShowMenu}
            >
                <ListItem text={`List item`} />
                <ListItem text={`List item`} />
                
                <SubMenu text={`Sub Menu item`}>
                    <SubMenu text={`Sub Menu item`}>
                        <ListItem text={`List item`} />
                        
                        <SubMenu text={`Sub Menu item`}>
                            <ListItem text={`List item`} />
                            <ListItem text={`List item`} />
                        </SubMenu>
                    </SubMenu>

                    <ListItem text={`List item`} />
                </SubMenu>
                
                <ListItem text={`List item`} />
                <ListItem text={`List item`} />

                <SubMenu text={`Sub Menu item`}>
                    <ListItem text={`List item`} />

                    <SubMenu text={`Sub Menu item`}>
                        <ListItem text={`List item`} />
                        <ListItem text={`List item`} />
                    </SubMenu>
                </SubMenu>

                <ListItem text={`List item`} />
            </Menu>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'
BasicStory.args = {
    listProps: {
        border: 'full'
    }
}

export default {
    title: 'Developments/Components/SubMenu',
    component: Component,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.SubMenuComponent>