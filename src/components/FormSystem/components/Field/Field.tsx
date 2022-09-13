import { forwardRef, useEffect } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import DefaultLabel from "./DefaultLabel"
import * as Styled from "./style"
import type * as Types from "./types"
import ValidationMessages from "./ValidationMessages"

const Field: Types.FieldComponent = forwardRef((props, ref) => {
    const { children, defaultLabelProps, validateOnChange, width, ...wrapperProps } = props

    const fieldContextValue = Hooks.useBuildFieldContext()

    useEffect(() => {
        fieldContextValue.setValidateOnChange(Boolean(validateOnChange))
    }, [fieldContextValue, validateOnChange])

    return (
        <Styled.Wrapper
            ref={ref}
            width={width}
            {...wrapperProps}
        >
            <Contexts.FieldContext.Provider value={fieldContextValue}>
                <DefaultLabel {...defaultLabelProps} />
                {children}
                <ValidationMessages />
            </Contexts.FieldContext.Provider>
        </Styled.Wrapper>
    )
})

export default Field
