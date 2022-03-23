import * as React from 'react';

function SvgOs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M16.031.594l3.625 11.531H32l-9.938 7.438 3.844 11.844-9.875-7.281-9.906 7.281 3.906-11.844L0 12.125h12.281L16.031.594z" />
    </svg>
  );
}

export default SvgOs;
