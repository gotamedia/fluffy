import * as React from 'react';

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M11.648 30.208L8.96 27.52l11.392-11.392-11.52-11.52L11.52 1.92l12.8 12.8c.768.768.768 1.92 0 2.688l-12.672 12.8z" />
    </svg>
  );
}

export default SvgArrowRight;
