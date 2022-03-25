import * as React from 'react';

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M7.808 28.16c-.256 0-.512 0-.768-.128-.384-.256-.64-.64-.64-1.152V5.12c0-.512.256-.896.64-1.152s.896-.256 1.408 0l17.792 10.88c.384.256.64.64.64 1.152s-.256.896-.64 1.152L8.448 28.032c-.128.128-.384.128-.64.128z" />
    </svg>
  );
}

export default SvgPlay;
