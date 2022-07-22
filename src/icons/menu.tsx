import * as React from 'react';

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M0 23.04h32v2.56H0v-2.56zm0-5.12h32v-2.56H0v2.56zM0 7.68v2.56h32V7.68H0z" />
    </svg>
  );
}

export default SvgMenu;
