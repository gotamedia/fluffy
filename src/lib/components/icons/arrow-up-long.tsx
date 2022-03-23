import * as React from 'react';

function SvgArrowUpLong(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.64 32V2.189l7.872 7.859.909-.909-8.96-8.96a.638.638 0 00-.908 0l-8.96 8.96.909.909 7.859-7.859V32z"
      />
    </svg>
  );
}

export default SvgArrowUpLong;
