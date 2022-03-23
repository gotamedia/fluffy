import * as React from 'react';

function SvgShrink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M13.818 17.455H3.636a.727.727 0 000 1.454h8.429L.21 30.756a.726.726 0 00.473 1.279.727.727 0 00.552-.253l.001-.001 11.855-11.84v8.422a.727.727 0 001.454 0V18.181a.727.727 0 00-.727-.727zM32 .727V.723a.727.727 0 00-1.243-.512L18.91 12.066V3.637a.727.727 0 00-1.454 0v10.182c0 .402.326.727.727.727h10.182a.727.727 0 000-1.454h-8.429L31.791 1.245a.725.725 0 00.211-.512V.729z" />
    </svg>
  );
}

export default SvgShrink;
