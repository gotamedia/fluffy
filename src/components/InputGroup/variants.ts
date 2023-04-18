import { css } from 'styled-components'

import { InputVariantTypes } from '../Input/types'
import type { InputVariantType } from '../Input/types'

const primary = ($variantType?: InputVariantType) => {
    switch ($variantType) {
        case InputVariantTypes.Default:
            return css`
                
            `
    }
}

const variants = {
    primary
}

export default variants