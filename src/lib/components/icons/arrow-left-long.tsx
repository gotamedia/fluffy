import * as React from 'react';

function SvgArrowLeftLong(props: React.SVGProps<SVGSVGElement>) {
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
        d="M32 15.36H2.189l7.859-7.872-.909-.909-8.96 8.96a.638.638 0 000 .908l8.96 8.96.909-.909-7.859-7.859H32z"
      />
    </svg>
  );
}

export default SvgArrowLeftLong;
