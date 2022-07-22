import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M18.531 32h-6V16h-4v-5.5l4-.031L12.5 7.25q0-3.375 1.281-5.313t5.25-1.938h4.406v5.5h-2.75q-1.531 0-1.844.578t-.313 1.641v2.75h4.938l-.563 5.531H18.53v16z" />
    </svg>
  );
}

export default SvgFacebook;
