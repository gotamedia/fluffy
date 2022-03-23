import * as React from "react";

function SvgChurch(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 30 29"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}
        >
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M5.37 16.739l-1.283-1.694L14.401 5.8V3.743h-1.852V2.44h1.852V.98h1.198v1.46h1.851v1.303H15.6V5.8l10.314 9.245-1.284 1.694L15 8.108l-9.628 8.631zm2.065-.486v11.6h4.968v-4.918c0-1.543 1.15-2.793 2.568-2.793h.057c1.418 0 2.568 1.25 2.568 2.793v4.918h4.968v-11.6L15 9.427l-7.565 6.826zm-.856 11.629H1.733V22.25l4.846-3.054v8.686zm16.841-.029v-8.65l4.846 3.047v5.632H23.42v-.029z"}
                fill={"#8A8A8D"}
            />
        </svg>
    );
}

export default SvgChurch;
