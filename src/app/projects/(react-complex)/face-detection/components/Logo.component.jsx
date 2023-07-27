'use client';

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const Logo = () => {
  return (
    <Tilt>
      <div
        className={`
    border-black border-2
      h-[150px] w-[150px]
      p-2 mt-0
      `}
      >
        <Image
          src="../assets/brain-icon.svg"
          alt="brain icon (unloaded :( )"
          width={150}
          height={150}
        />
      </div>
    </Tilt>
  );
};

export default Logo;
