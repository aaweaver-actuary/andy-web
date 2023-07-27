import Logo from './Logo.component';

const Navigation = () => {
  return (
    <nav
      className={`
      flex justify-between my-5
      w-[90vw] h-fit absolute
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
