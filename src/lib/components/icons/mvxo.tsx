import * as React from 'react';

function SvgMvxo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M256 512C114.9 512 0 397.1 0 256S114.9 0 256 0s256 114.9 256 256-114.9 256-256 256z" />
      <path
        d="M346.6 115h61.2v282h-70.3V220.8l-76.1 88.5h-10.8l-76.1-88.5V397h-70.3V115h61.2L256 219.6 346.6 115z"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

export default SvgMvxo;
