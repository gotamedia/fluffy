import * as React from "react";

function SvgNoCircleUser(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 22 22"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}
        >
            <path
                d={"M16.336 13.895l-.79-.317c-1.47-.598-1.47-1.161-1.47-1.874a2.447 2.447 0 01.88-1.945 5.071 5.071 0 001.758-4.057c0-3.51-2.189-5.702-5.723-5.702S5.286 2.191 5.286 5.711a5.098 5.098 0 001.758 4.083c.587.49.913 1.225.879 1.99 0 .642 0 1.196-1.468 1.76l-.8.325C3.14 14.907.01 16.139.01 19.976v.264A1.576 1.576 0 001.549 22h18.91a1.573 1.573 0 001.53-1.76v-.264c0-3.837-3.138-5.078-5.653-6.08z"}
                fillRule={"evenodd"}
            />
        </svg>
    );
}

export default SvgNoCircleUser;
