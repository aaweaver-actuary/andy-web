import Logo from './Logo.component';
import Box from './Box.component';

const Navigation = () => {
  return (
    <nav
      className={`
      flex justify-between my-5
      w-[90vw] h-fit absolute
      `}
    >
      <Logo />
      <Box style={{ height: 'fit-content' }}>
        <p
          className={`
          text-black hover:text-slate-500
          underline cursor-pointer p-1
          `}
        >
          Sign Out
        </p>
      </Box>
    </nav>
  );
};

export default Navigation;
