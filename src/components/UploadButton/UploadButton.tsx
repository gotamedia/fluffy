import {
    forwardRef,
    useState,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

export const UploadButton: Types.UploadButtonComponent = forwardRef((props, ref) => {
    const {
        size,
        variant,
        children = 'Upload',
        withIcon,
        withFileName,
        onChange,
        onFilesChange,
        className,
        ...DOMProps
    } = props

    const [filenames, setFilenames] = useState<string[]>()

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const newFiles = event.target.files

        if (newFiles) {
            setFilenames(Array.from(newFiles).map(file => file.name))
        }

        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onFilesChange === 'function') {
            onFilesChange(newFiles)
        }
    }, [onChange, onFilesChange])

    const wrapperClassName = classNames({
        'fluffy-upload-button': true,
        [className || '']: true
    })

    return (
        <Styled.Wrapper className={wrapperClassName} >
            <Styled.InnerWrapper
                $size={size}
                $variant={variant}
                tabIndex={0}
            >
                {
                    withIcon ? (
                        <Styled.UploadIcon size={size}/>
                    ) : (
                        null
                    )
                }

                <Styled.Text>
                    {children}
                </Styled.Text>

                <Styled.UploadInput
                    {...DOMProps}
                    ref={ref}
                    type={'file'}
                    children={undefined}
                    onChange={handleOnChange}
                />
            </Styled.InnerWrapper>

            {
                withFileName ? (
                    <Styled.Filename>
                        {filenames?.join(', ')}
                    </Styled.Filename>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

UploadButton.displayName = 'UploadButton'

export default withThemeProps(UploadButton) as Types.UploadButtonComponent