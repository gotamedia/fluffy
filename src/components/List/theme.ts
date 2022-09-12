import type { ThemeStyleItem } from '@root/types'

export type ListThemeType = {
    style: {
        root: ThemeStyleItem,
        inputGroup: ThemeStyleItem
        input: ThemeStyleItem
    }
}

const ListTheme: ListThemeType = {
    style: {
        root: {
            outline: 'none',
            padding: '5px 0',
            display: 'flex',
            flexDirection: 'column'
        },
        inputGroup: {
            marginBottom: '5px',

        },
        input: {
            minWidth: 'unset',

            '&:focus': {
                boxShadow: 'unset'
            }
        }
    }
}

export default ListTheme