import * as React from 'react';

function SvgBltSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="blt-square_svg__Lager_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      width="1em"
      height="1em"
      {...props}
    >
      <style>{'.blt-square_svg__st1{fill:#fff}'}</style>
      <path d="M0 0h250v250H0z" fill="#005ca9" />
      <path
        className="blt-square_svg__st1"
        d="M28 84.22h44.8c21.54 0 26.12 12.14 26.12 20.51 0 8.25-4.01 12.72-10.08 16.04 7.33 2.52 14.2 8.36 14.2 20.4 0 16.38-14.2 24.86-28.64 24.86H28V84.22zm25.21 31.85H66.5c5.27 0 8.59-1.49 8.59-6.76 0-4.12-3.44-5.61-8.59-5.61H53.21v12.37zm0 30.48h14.78c5.27 0 9.85-1.49 9.85-7.79 0-4.81-2.87-7.44-8.82-7.44H53.21v15.23zM103.87 84.22h25.21v60.84h36.2v20.96h-61.41v-81.8zM173.88 105.19h-22.91V84.22H222v20.97h-22.92v60.84h-25.2v-60.84z"
      />
    </svg>
  );
}

export default SvgBltSquare;
