import * as React from "react";

function SvgInvoice(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"17px"}
            height={"20px"}
            viewBox={"0 0 17 20"}
            version={"1.1"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}
        >
            <title>{"Shape Copy"}</title>
            <g id={"-----↳---Purchase-history"} stroke={"none"} strokeWidth={"1"} fillRule={"evenodd"}>
                <path d={"M17,5 L11.9,5 L11.9,0 L17,5 Z M10.2,6.66666667 L10.2,0 L0,0 L0,20 L17,20 L17,6.66666667 L10.2,6.66666667 Z"} id={"Shape-Copy"} fillRule={"nonzero"} />
            </g>
        </svg>
    );
}

export default SvgInvoice;
