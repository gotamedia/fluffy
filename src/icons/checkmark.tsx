import * as React from 'react';

function SvgCheckmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M10.368 28.416c-.512 0-1.024-.256-1.408-.512l-9.088-9.088L2.56 16l7.808 7.808L29.184 4.992l2.688 2.688-20.096 20.096c-.384.384-.896.64-1.408.64z" />
    </svg>
  );
}

export default SvgCheckmark;
