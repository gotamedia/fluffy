import { css } from "styled-components"
import { StyledSwitchProps, SwitchSizes } from "../types"

const sizeVariants = css<StyledSwitchProps>`
    ${({ $size}) => {
    switch($size) {
        case SwitchSizes.Tiny:
            return css`
                    width: 32px;
                    height: 20px;
                    
                    span {
                        border-radius: 10px;
                    }
                    
                    span:before {
                        height: 16px;
                        width: 16px;
                    }
    
                    input:checked + span:before {
                        -webkit-transform: translateX(12px);
                        -ms-transform: translateX(12px);
                        transform: translateX(12px);
                    }
                `
        case SwitchSizes.Small:
            return css`
                    width: 36px;
                    height: 22px;
                    
                    span {
                        border-radius: 11px;
                    }
                    
                    span:before {
                        height: 18px;
                        width: 18px;
                    }
    
                    input:checked + span:before {
                        -webkit-transform: translateX(14px);
                        -ms-transform: translateX(14px);
                        transform: translateX(14px);
                    }
                `
        case SwitchSizes.Big:
            return css`
                    width: 44px;
                    height: 26px;
                    
                    span {
                        border-radius: 13px;
                    }
                    
                    span:before {
                        height: 22px;
                        width: 22px;
                    }
    
                    input:checked + span:before {
                        -webkit-transform: translateX(18px);
                        -ms-transform: translateX(18px);
                        transform: translateX(18px);
                    }
                `
        case SwitchSizes.Huge:
            return css`
                    width: 48px;
                    height: 28px;
                    
                    span {
                        border-radius: 14px;
                    }
                    
                    span:before {
                        height: 24px;
                        width: 24px;
                    }
    
                    input:checked + span:before {
                        -webkit-transform: translateX(20px);
                        -ms-transform: translateX(20px);
                        transform: translateX(20px);
                    }
                `
        case SwitchSizes.Normal:
        default:
            return css`
                    width: 40px;
                    height: 24px;
                    
                    span {
                        border-radius: 12px;
                    }
                    
                    span:before {
                        height: 20px;
                        width: 20px;
                    }
    
                    input:checked + span:before {
                        -webkit-transform: translateX(16px);
                        -ms-transform: translateX(16px);
                        transform: translateX(16px);
                    }
                `
    }
}}
`

export {
    sizeVariants
}
