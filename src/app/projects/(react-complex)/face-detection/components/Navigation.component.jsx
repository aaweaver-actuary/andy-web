import Logo from './Logo.component';

const Navigation = () => {
  return (
    <nav
      style={{ display: 'flex', justifyContent: 'space-between' }}
      className={`
      border-green-500 border-2
      flex justify-between my-5
      w-[90vw] h-fit
      `}
    >
      <Logo />
      <p>NAVIGATION</p>
    </nav>
  );
};

export default Navigation;
