import { tint } from 'polished'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { TagsInputProps } from '@root/index'

export type TagsInputThemeType = ComponentTheme<{
    defaultProps: Partial<TagsInputProps>,
    style: {
        root: ThemeStyleItem,
        elementsWrapper: ThemeStyleItem,
        searchIcon: ThemeStyleItem,
        arrowIcon: ThemeStyleItem,
        popover: ThemeStyleItem,
        tagsElements: ThemeStyleItem,
        tagsWrapper: ThemeStyleItem,
        inputGroup: ThemeStyleItem,
        input: ThemeStyleItem,
        listWrapper: ThemeStyleItem
    }
}>

const TagsInputTheme: TagsInputThemeType = {
    defaultProps: {
        withList: true,
        filterNewTagsFromList: true
    },
    style: {
        root: ({ theme, $componentState }) => ({
            display: 'inline-flex',
            position: 'relative',
            outline: 'none',
            padding: '0 6px',
            alignItems: 'center',
            width: '100%',
            minHeight: '40px',
            borderRadius: '5px',
            border: `1px solid ${theme.colors.brand}`,
            boxSizing: 'border-box',

            ...($componentState?.disabled ? {
                opacity: 0.5
            } : {}),

            '&:focus': {
                boxShadow: 'white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px'
            }
        }),
        elementsWrapper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden'
        },
        searchIcon: {
            margin: 'auto 0px auto 3px'
        },
        arrowIcon: {
            margin: 'auto 3px auto 0px'
        },
        popover: {
            boxShadow: '0px 2px 15px rgb(0 0 0 / 20%)',
            borderRadius: '5px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1px'
        },
        tagsElements: {
            padding: '5px 10px',
            display: 'flex',
            gap: '5px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        tagsWrapper: ({ theme, $componentState }) => ({
            position: 'relative',
            width: '100%',
            margin: 'auto 0',
            minHeight: $componentState?.hasSelectedTags ? 'auto' : '34px',
            display: 'flex',
            backgroundColor: tint(0.93, theme.colors.brand),

            ...($componentState?.asInput ? {
                overflow: 'hidden',
                backgroundColor: 'unset',

                '.fluffy-tags-input-tags-element': {
                    overflow: 'hidden',
                    flexWrap: 'nowrap'
                },
                
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    background: 'linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(242,242,242,0.17) 80%,rgb(255 255 255) 99%,rgb(255 255 255) 100%)',
                }
            } : {}),
        }),
        inputGroup: {
            width: '100%'
        },
        input: {
            border: '0',
            height: '40px',
            width: '100%',
            outline: 'none',
            backgroundColor: '#ffffff',
        
            '&:hover': {
                backgroundColor: '#ffffff'
            },
        
            '&:focus': {
                boxShadow: 'none'
            }
        },
        listWrapper: {
            flex: 1,
            overflow: 'auto'
        }
    }
}

export default TagsInputTheme