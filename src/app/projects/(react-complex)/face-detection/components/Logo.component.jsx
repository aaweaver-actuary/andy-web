'use client';

import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <Tilt>
      <div
        className={`
    border-black border-2 bg-black bg-opacity-20
      h-[150px] w-[150px]
      p-2 mt-0
      `}
      >
        I AM A LOGO
      </div>
    </Tilt>
  );
};

export default Logo;
