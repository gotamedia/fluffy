import { css } from 'styled-components'

import { InputVariantTypes } from './types'
import type { InputVariantType } from './types'

const primary = ($variantType?: InputVariantType) => {
    switch ($variantType) {
        case InputVariantTypes.Default:
            return css`
                background-color: white;
            `
    }
}

const variants = {
    primary: primary
}

export default variants