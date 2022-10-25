import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import type * as Types from './types'

export const Tag: Types.TagComponent = forwardRef((props, ref) => {
    const {
        label,
        size,
        onRemove,
        disabled,
        iconProps,
        ...DOMProps
    } = props

    const wrapperClassName = classNames({
        'fluffy-tag': true,
        [DOMProps.className || '']: true
    })

    const labelClassName = classNames({
        'fluffy-tag-label': true
    })

    const dividerClassName = classNames({
        'fluffy-tag-divider': true
    })

    const iconClassName = classNames({
        'fluffy-tag-icon': true,
        [iconProps?.className || '']: true
    })

    const componentState = {
        disabled: disabled
    }

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size!}
            $componentState={componentState}
            {...DOMProps}
            className={wrapperClassName}
        >
            <Styled.Label className={labelClassName}>
                {label}
            </Styled.Label>

            <Styled.Divider className={dividerClassName}/>

            <Styled.ClearIcon
                disabled={disabled}
                {...iconProps}
                className={iconClassName}
                onClick={onRemove}
            />
        </Styled.Wrapper>
    )
})

Tag.displayName = 'Tag'

export default WithThemeProps(Tag) as Types.TagComponent