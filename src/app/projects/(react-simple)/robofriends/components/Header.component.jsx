import { Monoton } from 'next/font/google';

const monoton = Monoton({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <header
      className={`flex w-[80vw] mt-5 justify-center text-center ${monoton.className}`}
    >
      <h1 className="uppercase text-6xl">robofriends</h1>
    </header>
  );
};

export default Header;
