import * as React from 'react';

function SvgSsd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M31.969 32H.031V0h31.938v32z" />
    </svg>
  );
}

export default SvgSsd;
