import * as React from 'react';

function SvgVxow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx={125} cy={125} r={125} />
      <path
        d="M124.5 128.2c-4.3 17.1-8.5 34.8-13.6 56.8H60.2c-11.5-46.8-18.9-78.6-30.9-120.4h42.6c8.9 41.8 11.8 58.5 16.4 85.6h.7l17.1-85.6h37.3l17.1 85.6h.6c4.6-27.1 7.6-43.8 16.4-85.6H220c-11.8 41.8-19.2 73.5-30.7 120.4h-50.6c-4.9-22.1-9.4-39.8-13.5-56.8h-.7z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgVxow;
