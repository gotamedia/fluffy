import {
    useRef,
    useState,
    useCallback
} from 'react'
import { v4 as createId } from 'uuid'

import Menu from '@components/Menu'
import ListItem from '@components/ListItem'
import { Icons, IconSizes } from '@components/Icon'
import IconButton, { IconButtonShapes, IconButtonVariants } from '@components/IconButton'

import * as Styled from './style'
import type {
    KeyboardEventHandler,
    Dispatch,
    SetStateAction
} from 'react'

type ThemeItem = {
    id: string,
    name: string,
    code: string,
    latest?: boolean
}

type EditorHeaderProps = {
    initialTheme: ThemeItem,
    activeTheme: ThemeItem,
    savedThemes: ThemeItem[],
    setActiveTheme: Dispatch<SetStateAction<ThemeItem>>,
    setSavedThemes: (value: ThemeItem[] | ((val: ThemeItem[]) => ThemeItem[])) => void,
    handleSaveTheme: () => void,
    hasError: boolean
}

const Header = (props: EditorHeaderProps) => {
    const {
        initialTheme,
        activeTheme,
        savedThemes,
        setActiveTheme,
        setSavedThemes,
        handleSaveTheme,
        hasError
    } = props

    const settingsButtonRef = useRef<HTMLButtonElement | null>(null)

    const [showSettingsMenu, setShowSettingsMenu] = useState(false)

    const handleOnThemeNameChange: KeyboardEventHandler<HTMLInputElement> = useCallback(event => {
        const value = event.target.value

        setActiveTheme(current => {
            return {
                ...current,
                name: value
            }
        })
    }, [setActiveTheme])

    const handleCreateNewTheme = useCallback(() => {
        setActiveTheme({
            ...initialTheme,
            id: createId()
        })
    }, [initialTheme, setActiveTheme])

    const toggleSettingsMenu = useCallback(() => {
        setShowSettingsMenu(current => !current)
    }, [])

    const handleRemoveAllSavedThemes = useCallback(() => {
        const newTheme = {
            ...initialTheme,
            id: createId()
        }

        setSavedThemes([newTheme])
    }, [initialTheme, setSavedThemes])

    const handleRemoveTheme = useCallback((themeItem: ThemeItem) => {
        const newThemes = savedThemes
            .filter(i => i.id !== themeItem.id)
            .map((i, idx) => ({
                ...i,
                latest: idx === 0 ? true : false
            }))

        setActiveTheme(newThemes[0] || {})

        setSavedThemes(newThemes)
    }, [savedThemes, setActiveTheme, setSavedThemes])

    return (
        <Styled.Wrapper>
            <Styled.Input
                value={activeTheme.name || ''}
                onChange={handleOnThemeNameChange}
            />

            <Styled.IconsGroup>
                <Styled.SettingsIconButton
                    ref={settingsButtonRef}
                    onClick={toggleSettingsMenu}
                />
                <Menu
                    anchor={settingsButtonRef.current}
                    show={showSettingsMenu}
                    onClickOutside={toggleSettingsMenu}
                    listProps={{
                        type: 'select'
                    }}
                >
                    <ListItem
                        text={'Remove all saved themes'}
                        onClick={handleRemoveAllSavedThemes}
                    />

                    {
                        savedThemes.map(savedTheme => {
                            return (
                                <ListItem
                                    key={savedTheme.id}
                                    selected={savedTheme.id === activeTheme.id}
                                    text={savedTheme.name}
                                    onClick={() => setActiveTheme(savedTheme)}
                                >
                                    <IconButton
                                        icon={Icons.XMark}
                                        variant={IconButtonVariants.Outline}
                                        size={IconSizes.Tiny}
                                        shape={IconButtonShapes.Circle}
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            handleRemoveTheme(savedTheme)
                                        }}
                                    />
                                </ListItem>
                            )
                        })
                    }
                </Menu>

                <Styled.SaveIconButton onClick={handleSaveTheme} />
                <Styled.CreateIconButton onClick={handleCreateNewTheme} />
            </Styled.IconsGroup>

            {
                hasError ? (
                    <Styled.ErrorWrapper>
                        <Styled.ErrorMessage>
                            {'Invalid code!'}
                        </Styled.ErrorMessage>
                    </Styled.ErrorWrapper>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
}

export default Header