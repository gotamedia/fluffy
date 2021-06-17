import React from 'react'
import { ChakraProvider, extendTheme, ColorModeScript as ColorMode } from '@chakra-ui/react'
import { defaultTheme } from './theme'

import { useColorMode, useColorModeValue, useDisclosure } from './hooks'
import { Heading, Text} from './typography'
import { Input, PasswordInput, Button, PinInput, Select, Switch } from './forms'
import { useNotification } from './feedback'
import { Flex, Box, Center } from './layout'
import { lighten, darken } from './utils'

import {
    Drawer,
    DrawerFooter,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider
} from './overlay'

export {
    // theme
    extendTheme,
    // color mode
    ColorMode,
    // hooks
    useColorMode,
    useColorModeValue,
    useDisclosure,
    // feedback
    useNotification,
    // typography
    Heading,
    Text,
    // layout
    Box,
    Center,
    Flex,
    // overlay
    Drawer,
    DrawerFooter,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    // forms
    Input,
    PasswordInput,
    Button,
    PinInput,
    Select,
    Switch,
    // utils
    lighten,
    darken
}

export const ThemeProvider = ({theme = {}, children}) => {
    const extendedTheme = extendTheme(
        theme,
        defaultTheme
    )

    return (
        <ChakraProvider theme={extendedTheme}>
            {children}
        </ChakraProvider>
    )
}