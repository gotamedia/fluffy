import * as React from "react";

function SvgSmartPhone(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg id={"Layer_1"} data-name={"Layer 1"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 25 25"} {...props}>
            <path className={"cls-1"} d={"M18.75,0H6.25A1.25,1.25,0,0,0,5,1.25v22.5A1.25,1.25,0,0,0,6.25,25h12.5A1.25,1.25,0,0,0,20,23.75V1.25A1.25,1.25,0,0,0,18.75,0ZM10,2h5V3H10Zm2.45,21.39a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,12.45,23.39ZM19,19H6V5H19Z"} />
        </svg>

    );
}

export default SvgSmartPhone;
