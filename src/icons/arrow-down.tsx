import * as React from "react";

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 32 32"}
            {...props}
        >
            <path d={"M16 23.68c-.512 0-1.024-.256-1.408-.512l-12.8-12.8L4.48 7.68l11.392 11.392L27.264 7.68l2.688 2.688-12.8 12.8c-.128.256-.64.512-1.152.512z"} />
        </svg>
    );
}

export default SvgArrowDown;
