const ColorPicker = ({
  color,
  colorName,
  onColorChange,
}) => {
  return (
    <input
      type="color"
      name={colorName}
      value={color}
      onChange={onColorChange}
      className="mx-2 hover:scale-110 transition-all duration-200 border-black border-[1px] shadow-xl"
    />
  );
};

export default ColorPicker;
