import styled from 'styled-components'

import * as sizes from './sizes'
import type { InputGroupProps } from './types'

const Wrapper = styled.div<{ $size?: InputGroupProps['size'], $variant?: InputGroupProps['variant']  }>`
    display: inline-flex;
    position: relative;

    .input-group_icon {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: translate(-0, -50%);

        &:first-child {
            left: 0;
        }

        &:last-child {
            right: 0;
        }
    }

    ${({ $size }) => sizes[$size || 'normal']};
`

export {
    Wrapper
}