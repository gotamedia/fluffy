import React, {
    useState,
    useCallback
} from 'react'

import { Story, Meta } from '@storybook/react'

import Menu from './index'
import ListItem from '../ListItem'
import IconButton, { IconButtonShapes, IconButtonSizes } from '../IconButton'

import { Icons } from '../Icon'

import * as Types from './types'

const Basic: Story<Types.MenuProps> = (props) => {
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
                <ListItem
                    asTitle
                    text={`Group 1`}
                />

                {
                    [...new Array(5)].map((i, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                onClick={toggleShowMenu}
                                value={`Menu list item ${idx + 1}`}
                                text={`Menu list item ${idx + 1}`}
                            />
                        )
                    })
                }

                <ListItem
                    asTitle
                    text={`Group 2`}
                />

                {
                    [...new Array(5)].map((i, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                onClick={toggleShowMenu}
                                value={`Menu list item ${idx + 1}`}
                                text={`Menu list item ${idx + 1}`}
                            />
                        )
                    })
                }
            </Menu>
        </div>
    )
}

export const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'
BasicStory.args = {
    
}

export default {
    title: 'Developments/Components/Menu',
    component: Menu,
    argTypes: {
    },
    args: {
    }
} as Meta<Types.MenuComponent>