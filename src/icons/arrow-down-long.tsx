import * as React from 'react';

function SvgArrowDownLong(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#494b4c"
        d="M15.36 0v29.811l-7.872-7.859-.909.909 8.96 8.96a.638.638 0 00.908 0l8.96-8.96-.909-.909-7.859 7.859V0z"
      />
    </svg>
  );
}

export default SvgArrowDownLong;
