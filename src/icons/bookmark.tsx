import * as React from 'react';

function SvgBookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M6.016 32c-.128 0-.256 0-.384-.128-.128 0-.512-.256-.512-.896V1.28C5.12.512 5.632 0 6.4 0h19.2c.64 0 1.28.512 1.28 1.28v29.696c0 .64-.384.896-.512.896-.128.128-.512.256-1.024-.128l-9.216-5.376H16h-.128l-9.344 5.504C6.4 32 6.144 32 6.016 32zm-.128-1.28zM6.4 1.28v29.184l8.832-5.248c.384-.384 1.152-.384 1.664 0l8.704 5.12V1.28H6.4z" />
    </svg>
  );
}

export default SvgBookmark;
