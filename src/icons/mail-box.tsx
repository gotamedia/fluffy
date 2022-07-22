import * as React from 'react';

function SvgMailBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.2 8.5A4.58 4.58 0 000 13.14v9.11a1.25 1.25 0 001.25 1.25H8.5A.5.5 0 009 23V13a4.5 4.5 0 00-4.8-4.5zM7 15.75a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v1.5zM25 13v9.25a1.25 1.25 0 01-1.25 1.25H9.91c.059-.16.089-.33.09-.5V13a5.52 5.52 0 00-1.74-4 5.49 5.49 0 00-.63-.5H12V1a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H13v10a.5.5 0 101 0v-7h6.5A4.5 4.5 0 0125 13z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMailBox;
