import * as React from 'react';

function SvgMhSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="mh-square_svg__Lager_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <style>{'.mh-square_svg__st1{fill:#fff}'}</style>
      <path d="M0 0h512v512H0z" fill="#064e90" />
      <path
        className="mh-square_svg__st1"
        d="M86.2 379.5h-26V196.4h25v23.4h.7c8.6-15.5 24.4-28.3 43.5-28.3 19.4 0 35.2 11.5 43.5 29 12.8-18.8 26-29 49.1-29 12.5 0 24 4.3 33.6 12.8 11.9 10.9 11.2 31.3 11.2 42.8v132.4h-26v-134c0-20.4-5.6-31.9-28-31.9-8.9.3-17.8 4-24.4 10.2-10.5 9.5-11.9 20.1-11.9 33.3v122.5h-26v-134c0-19.1-6.3-31.9-27.3-31.9-9.5 0-18.8 3.6-25.7 10.2-10.5 9.5-11.2 20.1-11.2 33.3v122.3zM295.7 379.5v-247h58v94.8h40.2v-94.8h58v247h-58V276.7h-40.2v102.7h-58z"
      />
    </svg>
  );
}

export default SvgMhSquare;
