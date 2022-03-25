import * as React from "react";

function SvgError(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 15 14"}
            {...props}
        >
            <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M7.5 0C3.63401 0 0.5 3.13401 0.5 7C0.5 10.866 3.63401 14 7.5 14C11.366 14 14.5 10.866 14.5 7C14.4969 3.13529 11.3647 0.00308807 7.5 0ZM8.34 10.3264C8.34 10.4096 8.30696 10.4893 8.24815 10.5481C8.18934 10.607 8.10957 10.64 8.0264 10.64H6.9736C6.8004 10.64 6.66 10.4996 6.66 10.3264V7.0336C6.66 6.8604 6.8004 6.72 6.9736 6.72H8.0208C8.194 6.72 8.3344 6.8604 8.3344 7.0336L8.34 10.3264ZM7.5 5.8744C6.88144 5.8744 6.38 5.37296 6.38 4.7544C6.38 4.13584 6.88144 3.6344 7.5 3.6344C8.11856 3.6344 8.62 4.13584 8.62 4.7544C8.62 5.37296 8.11856 5.8744 7.5 5.8744Z"} fill={"#FF0000"} />
        </svg>
    );
}

export default SvgError;