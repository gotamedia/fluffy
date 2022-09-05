import * as React from "react";

function SvgSpinner(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 50 50"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}

            className="spinner"
        >
            <style>{`
                .spinner {
                  animation: rotate 2s linear infinite;
                  z-index: 2;
                }
                
                .spinner > .path {
                    stroke: hsl(210, 70%, 75%);
                    stroke-linecap: round;
                    animation: dash 1.5s ease-in-out infinite;
                }
                
                @keyframes rotate {
                  100% {
                    transform: rotate(360deg);
                  }
                }
                
                @keyframes dash {
                  0% {
                    stroke-dasharray: 1, 150;
                    stroke-dashoffset: 0;
                  }
                  50% {
                    stroke-dasharray: 90, 150;
                    stroke-dashoffset: -35;
                  }
                  100% {
                    stroke-dasharray: 90, 150;
                    stroke-dashoffset: -124;
                  }
                }
            `}</style>
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
            />
        </svg>
    );
}

export default SvgSpinner;
