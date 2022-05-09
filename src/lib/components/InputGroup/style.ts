import styled from 'styled-components'

import * as sizes from './sizes'
import type { InputGroupProps } from './types'

const Wrapper = styled.div<{ $size?: InputGroupProps['size'], $variant?: InputGroupProps['variant']  }>`
    display: inline-flex;
    position: relative;

    .input-group_icon {
        z-index: 1;
        position: absolute;
        top: 50%;
        transform: translate(-0, -50%);

        &:first-of-type {
            left: 0;
        }

        &:last-of-type {
            right: 0;
        }
    }

    ${({ $size }) => sizes[$size || 'normal']};
`

export {
    Wrapper
}