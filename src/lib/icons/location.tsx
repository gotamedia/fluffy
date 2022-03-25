import * as React from 'react';

function SvgLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M16 0C9.472-.128 3.968 4.992 3.84 11.52v.512c0 10.112 11.264 19.456 11.776 19.84.256.256.64.256.768 0 .512-.512 11.776-10.752 11.776-19.84C28.288 5.504 23.04.128 16.512 0H16zm0 17.92c-3.2 0-5.76-2.56-5.76-5.76S12.8 6.4 16 6.4s5.76 2.56 5.76 5.76-2.56 5.76-5.76 5.76z" />
    </svg>
  );
}

export default SvgLocation;
