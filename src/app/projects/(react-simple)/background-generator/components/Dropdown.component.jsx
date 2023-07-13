import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Dropdown = ({
  label,
  options,
  selected,
  onSelectedChange,
}) => {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1 }}
      className="w-[35%] text-center lowercase "
    >
      <InputLabel className="text-black items-center text-center w-[100%]">
        {label}
      </InputLabel>
      <Select
        id="demo-simple-select-standard"
        value={selected}
        onChange={(e) => onSelectedChange(e)}
        label={label}
        className="text-black text-center lowercase w-[100%]"
      >
        {Object.keys(options).map((option, index) => (
          <MenuItem
            value={option}
            key={index}
            className="text-black"
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
