import { TextField } from '@mui/material';

const InputForm = ({ handleSubmit, text, setText }) => {
  return (
    <form
      className="flex flex-col text-center w-[95%] h-[95%] p-10 m-3"
      onSubmit={handleSubmit}
    >
      <h2
        htmlFor="new-item"
        className="text-lg mb-5 font-bold ubuntu lowercase"
      >
        What do you need?
      </h2>
      <TextField
        id="new-item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        className="bg-slate-200 text-black hover:bg-slate-300 transition-all duration-200 ubuntu "
      />
    </form>
  );
};

export default InputForm;
