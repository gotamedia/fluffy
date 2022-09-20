import themeHelpers from '@utils/theme/helpers'

import type { ThemeStyleItem } from '@root/types'
import type { ModalProps } from './types'

export type ModalThemeType = {
    defaultProps: Partial<ModalProps>
    style: {
        overlay: ThemeStyleItem,
        root: ThemeStyleItem,
        icon: ThemeStyleItem
    }
}

const ModalTheme: ModalThemeType = {
    defaultProps: {
        withCloseIcon: true,
        closeOnClickOutside: false
    },
    style: {
        overlay: {
            display: 'flex'
        },
        root: {
            zIndex: '900',
            height: 'auto',
            width: '890px',
            borderRadius: '2px',
            backgroundColor: 'white',
            margin: 'auto',
            position: 'relative',
            overflow: 'hidden',
            padding: '16px',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',

            ...themeHelpers.isSmallDevice({
                width: '335px'
            })
        },
        icon: {
            position: 'absolute',
            top: '16px',
            right: '16px',
            cursor: 'pointer'
        }
    }
}

export default ModalTheme