import * as React from 'react';

function SvgBookmarked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M25.6 0H6.4c-.768 0-1.28.512-1.28 1.28v29.696c0 .384.128.768.512.896.128.128.256.128.384.128.256 0 .384 0 .512-.256l9.344-5.504h.256l9.216 5.376c.256.256.64.384 1.024.128.384-.128.512-.512.512-.896V1.28C26.88.64 26.24 0 25.6 0z" />
    </svg>
  );
}

export default SvgBookmarked;
