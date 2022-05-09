import {
    forwardRef,
    useState,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const UploadButton: Types.UploadButtonComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        children = 'Upload',
        withIcon = true,
        withFileName = true,
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

    return (
        <Styled.Wrapper className={className}>
            <Styled.InnerWrapper
                $size={size}
                $variant={variant}
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

export default UploadButton