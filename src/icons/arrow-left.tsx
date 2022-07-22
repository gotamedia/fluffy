import * as React from 'react';

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M21.632 30.208l-12.8-12.8c-.768-.768-.768-1.92 0-2.688l12.8-12.8 2.688 2.688L12.928 16 24.32 27.392l-2.688 2.816z" />
    </svg>
  );
}

export default SvgArrowLeft;
