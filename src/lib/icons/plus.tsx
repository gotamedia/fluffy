import * as React from 'react';

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M17.92 32h-3.84V17.92H0v-3.84h14.08V0h3.84v14.08H32v3.84H17.92z" />
    </svg>
  );
}

export default SvgPlus;
