import * as React from 'react';

function SvgOb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 26 32"
      {...props}
    >
      <path d="M11.281 5.25l1.594 2.5L19.281.437l2.5 2.5-7.938 6.75 1.625 3.031-.406.406 7.5 6.781-2.375 2.375-5.469-6.281v5.844h-2.406v.313l.828.484 1.297 1.984h.688v.781H7.469v-.781h.688q.469-1.5 1.297-1.984l.828-.484v-.313H7.876v-5.844L2.407 22.28.032 19.905l7.5-6.781-.406-.406 1.625-3.031-7.938-6.75 2.469-2.5 6.438 7.25z" />
    </svg>
  );
}

export default SvgOb;
