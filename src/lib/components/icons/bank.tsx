import * as React from "react";

function SvgBank(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 24 24"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}
        >
            <mask id="mask0_1_129191" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.92 10.56H0.48C0.273394 10.56 0.0899672 10.4278 0.0246324 10.2318C-0.0407023 10.0358 0.0267151 9.81997 0.192 9.69601L11.712 1.05601C11.8827 0.928007 12.1173 0.928007 12.288 1.05601L23.808 9.69601C23.9733 9.81997 24.0407 10.0358 23.9754 10.2318C23.91 10.4278 23.7266 10.56 23.52 10.56H22.08V18.24H22.56C22.8251 18.24 23.04 18.4549 23.04 18.72V20.16H0.96V18.72C0.96 18.4549 1.1749 18.24 1.44 18.24H1.92V10.56ZM19.2 10.56H16.32V18.24H19.2V10.56ZM13.44 18.24H10.56V10.56H13.44V18.24ZM13.3285 6.17409C13.1032 5.63514 12.5746 5.28573 11.9904 5.28961C11.2026 5.29484 10.5652 5.9322 10.56 6.72001C10.5561 7.30416 10.9055 7.83278 11.4445 8.05812C11.9834 8.28347 12.6051 8.16088 13.0182 7.74781C13.4313 7.33474 13.5539 6.71305 13.3285 6.17409ZM4.8 10.56H7.68V18.24H4.8V10.56ZM0.48 21.12H23.52C23.7851 21.12 24 21.3349 24 21.6V23.04H4.01073e-07V21.6C4.01073e-07 21.3349 0.214904 21.12 0.48 21.12Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_1_129191)">
                <rect width="24" height="24"/>
            </g>
        </svg>
    );
}

SvgBank.defaultProps = {
    fill: "black"
}

export default SvgBank;
