import * as React from "react";

function SvgSuccess(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 14 14"}
            {...props}
        >
            <mask id="mask0_344_42557" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 3.13401 3.13401 0 7 0C10.8647 0.00308807 13.9969 3.13529 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM6.0592 9.63766C6.16455 9.63766 6.26547 9.59525 6.3392 9.52L11.2 4.6816L10.64 4.1216L6.0648 8.68L4.312 6.9272L3.752 7.4872L5.7792 9.52C5.85293 9.59525 5.95385 9.63766 6.0592 9.63766Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_344_42557)">
                <rect width="14" height="14" fill="#41AD49"/>
                <rect width="14" height="14" fill="black" fillOpacity="0.18"/>
            </g>
        </svg>
    );
}

export default SvgSuccess;
