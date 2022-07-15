import * as React from 'react';

function SvgKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.85 19.15l-10-10A7.39 7.39 0 0015 7.5a7.5 7.5 0 10-5.3 7.17l1.24 1.2a.5.5 0 00.35.14H13v2.5a.5.5 0 00.5.5H16v2.5a.5.5 0 00.5.5H19v2.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.15-.36zM6 4a2 2 0 110 4 2 2 0 010-4z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgKey;
