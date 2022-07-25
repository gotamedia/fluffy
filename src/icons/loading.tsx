import * as React from "react";

function SvgSpinner(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 14 14"}
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
                
                @keyframes rotate {
                  100% {
                    transform: rotate(360deg);
                  }
                }
            `}</style>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1202 4.91668C12.382 5.55962 12.5263 6.26296 12.5263 7C12.5263 10.0521 10.0521 12.5263 7 12.5263C3.9479 12.5263 1.47368 10.0521 1.47368 7C1.47368 3.9479 3.9479 1.47368 7 1.47368C7.60713 1.47368 8.19139 1.57159 8.73786 1.75247L9.11718 0.325883C8.44927 0.114197 7.73797 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 6.09358 13.8277 5.2274 13.5141 4.43241L12.1202 4.91668Z" fill="#41AD49"/>
        </svg>
    );
}

export default SvgSpinner;
