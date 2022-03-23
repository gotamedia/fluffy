import * as React from 'react';

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M27.392 23.168L16 11.776 4.608 23.168 1.92 20.48l12.8-12.8c.768-.768 1.92-.768 2.688 0l12.8 12.8-2.816 2.688z" />
    </svg>
  );
}

export default SvgArrowUp;
