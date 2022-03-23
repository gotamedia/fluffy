import * as React from 'react';

function SvgEnlarge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M31.896.824a1.333 1.333 0 00-.72-.72L30.667 0H17.334c-.733 0-1.333.597-1.333 1.333s.6 1.333 1.333 1.333h10.115L2.668 27.447V17.332a1.333 1.333 0 00-2.666 0v13.339l.101.504.288.432.011.011.421.277.512.104h13.333c.736 0 1.333-.6 1.333-1.333s-.597-1.333-1.333-1.333H4.553L29.334 4.552v10.115c0 .736.6 1.333 1.333 1.333S32 15.403 32 14.667V1.334l-.104-.509z" />
    </svg>
  );
}

export default SvgEnlarge;
