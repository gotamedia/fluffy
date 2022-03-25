import * as React from 'react';

function SvgImages(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M30.592 1.28H6.784c-.896 0-1.664.768-1.664 1.664V6.4h20.224c1.536 0 2.816 1.28 2.816 2.816V24.32h2.432c.768 0 1.408-.64 1.536-1.408V2.944c0-.896-.64-1.536-1.536-1.664zm-5.248 6.4H1.536C.768 7.68 0 8.448 0 9.216v19.84c0 .896.768 1.664 1.536 1.664h23.68c.896 0 1.536-.768 1.536-1.536V9.216c.128-.768-.64-1.536-1.408-1.536zM7.68 11.52c1.408 0 2.56 1.152 2.56 2.56s-1.152 2.56-2.56 2.56-2.56-1.152-2.56-2.56 1.152-2.56 2.56-2.56zM3.84 25.6s1.792-5.888 4.48-5.888c2.304 0 2.944 4.224 5.12 1.152 2.432-3.456 4.736-9.088 9.6 4.864H3.84z" />
    </svg>
  );
}

export default SvgImages;