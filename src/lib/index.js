import React from 'react'
import { ChakraProvider, extendTheme, ColorModeScript as ColorMode } from '@chakra-ui/react'
import { defaultTheme } from './theme'

import { useColorMode, useColorModeValue, useDisclosure, useTheme } from './hooks'
import { Heading, Text} from './typography'
import { Image } from './media'
import { Input, PasswordInput, Button, PinInput, Select, Switch } from './forms'
import { useNotification } from './feedback'
import { Flex, Box, Center, Card, CardTitle } from './layout'
import { lighten, darken } from './utils'
// import { Author, AuthorMeta } from './display'
import { Quote, QuoteText, QuoteByline } from './display'

import {
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
    useTheme,
    // feedback
    useNotification,
    // typography
    Heading,
    Text,
    // media
    Image,
    // layout
    Box,
    Card,
    CardTitle,
    Center,
    Flex,
    // overlay,
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
    darken,
    //display
    Quote, QuoteText, QuoteByline
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