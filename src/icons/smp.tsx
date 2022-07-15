import * as React from 'react';

function SvgSmp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M28.313 29.563H18.157v2.438h-4.313v-2.438H3.688l1-1.125q1.031-1.094 2.359-2.719t2.578-3.469q1.281-1.875 1.781-3.344H6.312l.875-.938 2.016-2.328 2.234-2.953L13 9.874H8.344q1.688-1.656 3.094-3.406T13.86 3.28 15.438.936l.563-.938.531.969q.531.938 1.531 2.406t2.406 3.219q1.406 1.719 3.188 3.281h-4.938q.469 1.25 1.625 2.844 1.125 1.563 2.313 2.938t2.125 2.313l.906.938h-5.375q.938 1.938 2.313 3.844 1.344 1.906 2.625 3.422t2.156 2.453l.906.938z" />
    </svg>
  );
}

export default SvgSmp;