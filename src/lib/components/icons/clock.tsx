import * as React from "react";

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={11}
            height={11}
            viewBox={"0 0 11 11"}
            xmlns={"http://www.w3.org/2000/svg"}
            xmlnsXlink={"http://www.w3.org/1999/xlink"}
            {...props}
        >
            <title>{"706B0D95-18F7-4836-9DB8-297ECEF71949@1x"}</title>
            <defs>
                <filter colorInterpolationFilters={"auto"} id={"prefix__a"}>
                    <feColorMatrix
                        in={"SourceGraphic"}
                        values={"0 0 0 0 0.541176 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1.000000 0"}
                    />
                </filter>
                <path
                    d={"M5.5 0a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm1.24 7.691l-1.76-1.65a.44.44 0 01-.14-.321V3.08h.88v2.45l1.62 1.51-.6.651z"}
                    id={"prefix__b"}
                />
            </defs>
            <g filter={"url(#prefix__a)"} fill={"none"} fillRule={"evenodd"}>
                <mask id={"prefix__c"} fill={"#fff"}>
                    <use xlinkHref={"#prefix__b"} />
                </mask>
                <path fill={"#000"} mask={"url(#prefix__c)"} d={"M0 0h11v11H0z"} />
            </g>
        </svg>
    );
}

export default SvgClock;
