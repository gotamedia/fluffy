import * as React from 'react';

function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={"1em"}
      height={"1em"}
      viewBox={"0 0 24 24"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
        <mask id="a" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
          <path d="M20.102 22.138 12 14.035l-8.102 8.103-2.036-2.036L9.965 12 1.862 3.898l2.035-2.036L12 9.965l8.102-8.103 2.035 2.036L14.035 12l8.102 8.102-2.035 2.036Z" fill="#fff"/>
        </mask>
        <g mask="url(#a)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </svg>
  );
}

export default SvgCross;
