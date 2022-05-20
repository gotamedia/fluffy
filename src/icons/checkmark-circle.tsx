import * as React from "react";

function SvgCheckmarkCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 20 20"}
            {...props}
        >
            <rect x={"1"} y={"1"} width={"17.957"} height={"18"} rx={"8.97852"} stroke={"#2E2A25"} />
            <path
                d={"M8.5237 13C8.4811 12.9994 8.44047 12.9807 8.41065 12.9481L5.98828 10.3545L6.2176 10.1089L8.5237 12.5816L13.7399 7L13.9692 7.24553L8.63674 12.9481C8.60692 12.9807 8.56629 12.9994 8.5237 13Z"}
                stroke={"#2E2A25"}
            />
        </svg>
    );
}

export default SvgCheckmarkCircle;
