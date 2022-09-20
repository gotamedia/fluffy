import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { InputGroupProps } from './types'

type WrapperProps = {
    $size?: InputGroupProps['size'],
    $variant?: InputGroupProps['variant'],
    $componentState: {
        elements: {
            left: string,
            right: string
        }
    }
}

const Wrapper = styled.div<WrapperProps>`
    ${props => getComponentTheme('InputGroup', 'style.root', props)};
    ${props => getComponentTheme('InputGroup', `variants.${props.$variant}`, props)};
    ${props => getComponentTheme('InputGroup', `sizes.${props.$size}`, props)};
`

export {
    Wrapper
}