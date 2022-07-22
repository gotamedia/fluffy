import * as React from "react";

function SvgError(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 14 14"}
            {...props}
        >
            <mask id="mask0_344_42539" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 3.13401 3.13401 0 7 0C10.8647 0.00308807 13.9969 3.13529 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM9.52 9.884L10.08 9.324L7.7392 7L10.08 4.6816L9.52 4.1216L7.196 6.44L4.872 4.116L4.312 4.676L6.6304 6.9944L4.3064 9.3184L4.8664 9.8784L7.196 7.56L9.52 9.884Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_344_42539)">
                <rect width="14" height="14" fill="#FF0000"/>
            </g>
        </svg>
    );
}

export default SvgError;
