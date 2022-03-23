import * as React from 'react';

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M21.888 16.256L32 26.368V6.144zM16 19.968L31.616 4.48c-.256-.384-.768-.64-1.152-.64H1.536c-.384 0-.896.256-1.152.64L16 19.968zm4.864-2.56l-4.352 4.352c-.256.256-.768.256-1.024 0l-4.224-4.352L.768 27.904c.256.128.512.256.768.256h28.8c.384 0 .64-.128.896-.256L20.864 17.408zM0 6.144v20.224l10.112-10.112z" />
    </svg>
  );
}

export default SvgMail;
