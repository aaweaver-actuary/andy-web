const Scroll = ({ children }) => {
  return (
    <div className="min-h-[500px] h-full overflow-y-scroll">{children}</div>
  );
};

export default Scroll;
