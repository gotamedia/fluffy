import {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle
} from 'react'

import * as Styled from './style'
import * as Types from './types'

const Alert: Types.AlertComponent = forwardRef((props, ref) => {
    const {
        defaultDisplay = true,
        className,
        icon,
        onClose,
        cloasable = true,
        variant = 'success',
        children
    } = props
    
    const [display, setDisplay] = useState(defaultDisplay)

    useImperativeHandle(ref, () => {
        return {
            display: status => setDisplay(status)
        }
    }, [])

    const handleOnClose = useCallback(() => {
        if (typeof onClose === 'function') {
            onClose()
        }

        setDisplay(false)
    }, [onClose])

    const hasIcon = typeof icon === 'string' && icon.length ? true : false

    return (
        display ? (
            <Styled.Wrapper
                $variant={variant as Types.AlertProps['variant']}
                className={className}
            >
                <Styled.Content>
                    {
                        hasIcon ? (
                            <Styled.Icon icon={icon!}/>
                        ) : (
                            null
                        )
                    }

                    <Styled.TextWrapper>
                        {children}
                    </Styled.TextWrapper>


                    {
                        cloasable ? (
                            <Styled.CloseIcon onClick={handleOnClose}/>
                        ) : (
                            null
                        )
                    }
                </Styled.Content>
            </Styled.Wrapper>
        ) : (
            null
        )
    )
})

Alert.displayName = 'Alert'

export default Alert