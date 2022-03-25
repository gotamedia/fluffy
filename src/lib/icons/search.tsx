import * as React from 'react';

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M32 30.208L21.632 19.84c4.224-5.248 3.328-12.928-1.92-17.152S6.912-.64 2.688 4.608-.64 17.536 4.608 21.76c4.48 3.584 10.88 3.584 15.232 0l10.368 10.368L32 30.208zM12.16 21.76c-5.248 0-9.6-4.352-9.6-9.6s4.352-9.6 9.6-9.6 9.6 4.352 9.6 9.6c0 5.248-4.352 9.6-9.6 9.6z" />
    </svg>
  );
}

export default SvgSearch;
