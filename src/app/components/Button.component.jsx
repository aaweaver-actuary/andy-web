import { Button as MButton } from '@mui/material';

const Button = ({ text }) => {
  return (
    <MButton
      variant="contained"
      className={`lowercase text-md ubuntu z-[1000] rounded-xl text-black border-black border-[2px] mx-2 hover:bg-black hover:text-white`}
    >
      {text}
    </MButton>
  );
};

export default Button;
