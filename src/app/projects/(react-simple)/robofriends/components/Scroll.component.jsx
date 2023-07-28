const Scroll = ({ children }) => {
  return (
    <div className="border-black border-[1px] h-[500px] overflow-y-scroll">
      {children}
    </div>
  );
};

export default Scroll;
