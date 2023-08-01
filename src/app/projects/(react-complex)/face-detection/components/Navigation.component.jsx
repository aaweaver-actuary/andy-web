import Logo from './Logo.component';

const Navigation = () => {
  return (
    <nav
      className={`
      border-green-500 border-2
      flex justify-between my-5
      w-[90vw] h-fit
      bg-white bg-opacity-30
      `}
    >
      <Logo />
      <p
        className={`
      text-black hover:text-slate-500
      underline cursor-pointer p-3
      `}
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
