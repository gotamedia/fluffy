import * as React from "react";

function SvgNewWindow(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg id={"Layer_1"} data-name={"Layer 1"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 25 25"} {...props}>
            <defs>
                <style>{".cls-1{fill:#494b4c;}"}</style>
            </defs>
            <path className={"cls-1"} d={"M19,13h1V23.75A1.25,1.25,0,0,1,18.75,25H1.25A1.25,1.25,0,0,1,0,23.75V6.25A1.25,1.25,0,0,1,1.25,5H12V6H1.25A.25.25,0,0,0,1,6.25v17.5a.25.25,0,0,0,.25.25h17.5a.25.25,0,0,0,.25-.25ZM24.5,0H17V1h6.29L11,13.34l.71.71L24,1.71V8h1V.5A.5.5,0,0,0,24.5,0Z"} />
        </svg>

    );
}

export default SvgNewWindow;
