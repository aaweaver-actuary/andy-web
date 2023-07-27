const Box = ({ children, style = {} }) => {
  return (
    <div
      className="bg-white bg-opacity-30 rounded-lg shadow-xl p-3"
      style={style}
    >
      {children}
    </div>
  );
};

export default Box;
